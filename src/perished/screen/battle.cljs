(ns perished.screen.battle
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h :refer [affixer]]
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
(defn menu-width [state] (* 0.98 (:window-width state)))

(defn highlight? [state] (b/hover-> state))

(defn char-x-position [target index]
  (let [mult (if (= target :party) -1 1)]
    (* mult (+ char-x-offset (* index char-separator))) ))

(defn selector [state index target & [clickable active hidden]]
  (let [w (:window-width state)
        div (str "div.selector" 
                 (if clickable ".clickable")
                 (if active ".active" ""))]
    [(keyword div)
     {:hidden hidden
      :style (affixer 
              {:height (* selector-size w) :width (* selector-size w)}
              state
              :top
              (char-x-position target index) 
              selector-y-offset)}]))

(defn char-fixer [state bchan target]
  (let [w (:window-width state)
        h (:window-height state)
        targetting (= :target (b/menu-> state))
        valid-targets (if targetting (b/valid-targets-> state))] 
    (fn [index character]
      (let [valid-target (and targetting (valid-targets character))] 
        [:div.char-container
         {:key index}
         (if valid-target [:div.clickable ""])
         [:div.character
          {:key index 
           :style (affixer 
                   {:height (* char-height h) :width (* char-width w)} 
                   state
                   :bottom 
                   (char-x-position target index)
                   char-y-offset)
           :on-click (fn [] 
                       (if valid-target 
                         (put! bchan [:select-target index])))}]
         (if valid-target
           (selector state index target true false valid-target)
           [:div ""])]))))

(defn characters [state bchan]
  [:div.characters (affixer {} state :top-left 0 0)
   [:div.party 
    (map-indexed (char-fixer state bchan :party) 
                 (b/party-> state))]
   [:div.enemies 
    (map-indexed (char-fixer state bchan :enemies) 
                 (b/enemies-> state))]])

(defn skill-menu [state bchan]
  [:div.outer-battle 
   {:style (affixer {} state :top-right skill-x-offset skill-y-offset)}
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
          (b/active-skills state))]]]) 

(defn description-menu [state]
  [:div {:hidden (not (highlight? state))}
   [:div.desc-menu 
    {:style (affixer {:width (menu-width state)} state :bottom 0 desc-y-offset)} 
    (:description (b/hover-description state))]])

(defn menus-dispatch [state _] (-> state :page-state :input-state :menu))
(defmulti menus menus-dispatch)
(defmethod menus :root [state bchan]
  [:div {} 
   (skill-menu state bchan) 
   (description-menu state)
   (selector state (b/char-num-> state) :party)])

(defmethod menus :target [state bchan]
  [:div {}
   [:div.desc-menu 
    {:style (affixer {:width (menu-width state)} state :top 0 desc-y-offset)}
    "Select A Target"]
   (description-menu state)])

(defn battle-style [state] 
  {:style (affixer {:height (:window-height state)}
                   state :top-left 0 0)})
(defn battle-dispatch [state _] (b/page-state-> state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state bchan]
  [:div.game
   [:div.battle 
    (battle-style state)
    (menus state bchan)
    (characters state bchan)]])

(defmethod perished.screen.view :battle [state bchan]
  (battle state bchan))
