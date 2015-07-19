(ns perished.screen.battle
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h]
            [perished.character :as c] 
            [perished.battle :as b]
            [perished.screen]))

(def char-height 0.75)
(def char-width 0.09)
(def char-x-offset 0.07)
(def char-y-offset 0.075)
(def char-separator 0.12)
(def selector-size 0.025)
(def selector-y-offset 0.1)
(def skill-x-offset 0.01)
(def skill-y-offset 0.025)
(def desc-y-offset 0.01)

(defn highlight? [state] (b/hover-> state))

(defn char-fixer [target affixer w h]
  (let [mult (if (= target :party) -1 1)] 
    (fn [index character]
      [:div.character
       {:key index 
        :style (affixer 
                {:height (* char-height h) :width (* char-width w)} 
                :bottom 
                (* mult (+ char-x-offset (* index char-separator))) 
                char-y-offset)}])))

(defn selector [state affixer]
  (let [w (:window-width state)]
    [:div.selector 
     {:style (affixer 
              {:height (* selector-size w) :width (* selector-size w)}
              :top
              (- (* -1 (b/char-num-> state) char-separator) char-x-offset) 
              selector-y-offset)}]))

(defn characters [state bchan affixer]
  (let [w (:window-width state) h (:window-height state)]
   [:div.characters (affixer {} :top-left 0 0)
    [:div.party 
     (map-indexed (char-fixer :party affixer w h) (b/party-> state))]
    [:div.enemies 
     (map-indexed (char-fixer :enemies affixer w h) (b/enemies-> state))]]))

(defn skill-menu [state bchan affixer]
  [:div
   [:div {:style (affixer {} :top-right skill-x-offset skill-y-offset)}
    [:div.battle-menu
     [:ul (map-indexed 
           (fn [i sk] 
             [:li 
              {:key i
               :on-mouse-over (fn [] (put! bchan [:hover i]))
               :on-mouse-out (fn [] (put! bchan [:hover nil]))
               :on-click (fn []
                           (put! bchan [:hover nil])
                           (put! bchan [:select-skill i]))} 
              [:div.inner (:name sk)] ]) 
           (b/active-skills state))]]]]) 

(defn description-menu [state affixer]
  [:div {:hidden (not (highlight? state))}
   [:div.desc-menu 
    {:style (affixer {} :bottom 0 desc-y-offset)} 
    (:description (b/hover-description state))]])

(defn menus-dispatch [state _ _] (-> state :page-state :input-state :menu))
(defmulti menus menus-dispatch)
(defmethod menus :root [state bchan affixer]
  [:div {} 
   (skill-menu state bchan affixer) 
   (description-menu state affixer)
   (selector state affixer)])

(defmethod menus :target [state bchan affixer]
  [:div {:on-click (fn [] (put! bchan [:select-target 0]))} "click here"])

(defn battle-style [state] {:style {:height (:window-height state)}})
(defn battle-dispatch [state _ _] (b/page-state-> state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state bchan affixer]
  [:div.battle (battle-style state)
   (menus state bchan affixer)
   (characters state bchan affixer)])

(defmethod perished.screen.view :battle [state bchan]
  (let [affixer (h/affix-fn (:window-width state))] 
    (battle state bchan affixer)))
