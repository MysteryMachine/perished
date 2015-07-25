(ns perished.screen.menu
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h]
            [perished.screen]))

(defn menu-dispatch [state & _] (-> state :page-state :name))
(defmulti menu menu-dispatch)

(defmethod menu :start-menu [state bchan]
  (let [affixer (h/affix-fn (:window-width state))]
    [:div.game {:style (affixer { :width "400px" } :center 0 0)}
     [:h1 "Your Party Has Perished"]
     [:div 
      [:a {:href "#" :on-click #(put! bchan :new-game)} "New Game"]]
     [:div 
      [:a {:href "#"} "Continue"]]
     [:div 
      [:a {:href "#"} "Exit"]]]))

(defmethod perished.screen.view :menu [state bchan] (menu state bchan))
