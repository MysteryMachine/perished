(ns perished.screen.battle
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h]
            [perished.character :as c] 
            [perished.screen]))

(defn highlight? [state] 
  (-> state :page-state :input-state :hover))

(defn make-lay-fn [target affixer w h]
  (let [mult (if (= target :party) -1 1)] 
    (fn [index character]
      [:div.character
       {:key index 
        :style (affixer {:height (* 0.7  h) :width (* .18 w)} 
                        :bottom 
                        (* mult (+ 0.07 (* index 0.12))) 
                        0)}])))

(defn active-character [state]  (let [pgstate (:page-state state)] 
    (get (:party pgstate) (-> pgstate :input-state :character))))

(defn characters [state bchan affixer]
  (let [pgstate (:page-state state)
        active-char (active-character state)
        party (:party pgstate)
        enemies (:enemies pgstate)
        w (:window-height state)
        h (:window-height state)
        lay-party (make-lay-fn :party affixer w h)
        lay-enemies (make-lay-fn :enemies affixer w h)]
    [:div.characters (affixer {} :top-left 0 0)
     [:div.party
      (map-indexed lay-party party)]
     [:div.enemies
      (map-indexed lay-enemies enemies)]]))

(defn menus-dispatch [state _ _] (-> state :page-state :input-state :menu))
(defmulti menus menus-dispatch)
(defmethod menus :root [state bchan affixer]
  (let [pgstate (:page-state state) 
        active-char (active-character state)
        skills (vec (c/actives active-char))
        skill-menu [:div
                    [:div {:style (affixer {} :top-right 0.01 0.025)}
                     [:div.battle-menu
                      [:ul (map-indexed 
                            (fn [i sk] 
                              [:li 
                               {:key i
                                :on-mouse-over (fn [] (put! bchan [:hover i]))
                                :on-mouse-out (fn [] (put! bchan [:hover nil]))} 
                               [:div.inner (:name sk)] ]) 
                            skills)]]]]
        final (if (highlight? state)
                (conj skill-menu 
                      [:div.desc-menu 
                       {:style (affixer {} :bottom 0 0.01)} 
                       (:description (get skills (-> pgstate :input-state :hover)))])
                skill-menu)]
    final))

(defn battle-dispatch [state _ _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state bchan affixer]
  [:div.battle {:style {:height (:window-height state)}}
   (menus state bchan affixer)
   (characters state bchan affixer)])

(defmethod perished.screen.view :battle [state bchan]
  (let [affixer (h/affix-fn (:window-width state))] 
    (battle state bchan affixer)))
