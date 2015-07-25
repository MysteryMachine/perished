(ns perished.screen.menu
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h :refer [affixer]]
            [perished.screen]))

(defn menu-dispatch [state & _] (-> state :page-state :name))
(defmulti menu menu-dispatch)

(defmethod menu :start-menu [state bchan]
  [:div.game {:style (affixer { :width "400px" } state :center 0 0)}
   [:h1 "Your Party Has Perished"]
   [:div 
    [:a {:href "#" :on-click #(put! bchan :new-game)} "New Game"]]
   [:div 
    [:a {:href "#"} "Continue"]]
   [:div 
    [:a {:href "#"} "Exit"]]])

(defmethod perished.screen.view :menu [state bchan] 
  (menu state bchan))
