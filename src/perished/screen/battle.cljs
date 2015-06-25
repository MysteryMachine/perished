(ns perished.screen.battle
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h]
            [perished.character :as c] 
            [perished.screen]))

(defn menus-dispatch [state _ _] (-> state :page-state :input-state :menu))
(defmulti menus menus-dispatch)
(defmethod menus :root [state bchan affixer]
  (let [pgstate (:page-state state) 
        active-char (get (:party pgstate) (-> pgstate :input-state :character))
        skills (c/actives active-char)]
      [:div.battle-menu {:style (affixer {} :top-left 0.01 0.015)}
       [:ul (map (fn [sk] 
                   [:li [:div.inner (:name sk)] ]) 
                 skills)]]))

(defn battle-dispatch [state _ _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state bchan affixer]
  [:div
   (menus state bchan affixer)])

(defmethod perished.screen.view :battle [state bchan]
  (let [affixer (h/affix-fn (:window-width state))] 
    (battle state bchan affixer)))
