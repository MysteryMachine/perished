(ns perished.screen.menu
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen]))

(defmethod perished.screen.view :menu [data bchan]
  [:div 
    [:h1 "Your Party Has Perished"]
      [:div 
	[:a {:href "#" :on-click #(put! bchan :new-game)} "New Game"]]
      [:div 
	[:a {:href "#"} "Continue"]]
      [:div 
	[:a {:href "#"} "Exit"]]])
