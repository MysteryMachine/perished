(ns perished.screen
  (:require [cljs.core.async :as async
             :refer [put!]]))

(defmulti  view :view)
(defmethod view :default [data _] [:div (str data)]) 
(defmethod view :menu [data bchan]
  [:div 
    [:h1 "Your Party Has Perished"]
      [:div 
	[:a {:href "#" :on-click #(put! bchan :new-game)} "New Game"]]
      [:div 
	[:a {:href "#"} "Continue"]]
      [:div 
	[:a {:href "#"} "Exit"]]])

(defmethod view :intro [data bchan]
  [:div
    [:h1 "Introduction"]])
