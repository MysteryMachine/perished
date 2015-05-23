(ns perished.screen)

(defmulti  view ::stage)
(defmethod view :default [data _] [:div (str data)])
(defmethod view :menu [data button-chan]
  [:div 
    [:h1 "Your Party Has Perished"]
      [:div 
	[:a {:href "#"} "New Game"]]
      [:div 
	[:a {:href "#"} "Continue"]]
      [:div 
	[:a {:href "#"} "Exit"]]])

