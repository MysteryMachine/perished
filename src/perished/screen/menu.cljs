(ns perished.screen.menu
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen.helpers :as h]
            [perished.screen]))

(defmethod perished.screen.view :menu [data bchan]
  (let [affixer (h/affix-fn (:window-width data))]
    [:div {:style (affixer { :width "400px" } :center 0 0)}
    [:h1 "Your Party Has Perished"]
    [:div 
     [:a {:href "#" :on-click #(put! bchan :new-game)} "New Game"]]
    [:div 
     [:a {:href "#"} "Continue"]]
    [:div 
     [:a {:href "#"} "Exit"]]]))
