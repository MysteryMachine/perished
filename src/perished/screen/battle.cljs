(ns perished.screen.battle
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h]
            [perished.character :as c] 
            [perished.screen]))

(defn make-lay-fn [target affixer]
  (let [mult (if (= target :party) -1 1)] 
    (fn [index character]
      [:div.character
       {:key index 
        :style (affixer {} 
                        :bottom 
                        (* mult (+ 0.07 (* index 0.12))) 
                        0)}])))

(defn active-character [state]
  (let [pgstate (:page-state state)] 
    (get (:party pgstate) (-> pgstate :input-state :character))))

(defn characters [state bchan affixer]
  (let [pgstate (:page-state state)
        active-char (active-character state)
        party (:party pgstate)
        enemies (:enemies pgstate)
        _ (println pgstate)
        lay-party (make-lay-fn :party affixer)
        lay-enemies (make-lay-fn :enemies affixer)]
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
        skills (c/actives active-char)]
    [:div 
     [:div {:style (affixer {} :top-left 0.01 0.025)}
      [:div.battle-menu
       [:ul (map-indexed (fn [i sk] 
                           [:li {:key i} [:div.inner (:name sk)] ]) 
                         skills)]]]
     [:div.desc-menu {:style (affixer {} :bottom 0 0.01)} "Hello"]]))

(defn battle-dispatch [state _ _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state bchan affixer]
  [:div
   (menus state bchan affixer)
   (characters state bchan affixer)])

(defmethod perished.screen.view :battle [state bchan]
  (let [affixer (h/affix-fn (:window-width state))] 
    (battle state bchan affixer)))
