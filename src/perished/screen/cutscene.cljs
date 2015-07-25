(ns perished.screen.cutscene
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen]
            [perished.screen.helpers :refer [gentry]]))


(defmulti cutscene (fn [data _] (-> data :page-state :name)))
(defmethod cutscene :intro [data bchan]
  [:div.game
   [:h1 "Introduction"]
   [:h2 (gentry 0)]
   [:p "You see, comrades, a flip of the coin is very deterministic. If one knows all the munute details involving the affair, using the laws of physics, one could very easily untangle the web. And, for that matter, a spider's web, can also be calculated. My friend says she knows a gentleman called Laplace that can do it rather trivially."]
   [:h2 (gentry 1)]
   [:p "I heard that the randomness doesn't come from a lack of measurement, but from the impossibility of measurement."]
   [:h2 (gentry 2)]
   [:p "Impossibility of measurement? Come here, I have my measuring tape. I wager 20 pieces that I can measure your height without changing how tall you are."]
   [:h2 (gentry 3)]
   [:p "Seems like a losing wager to me. When I was a child, every time my mother measured me, I had grown! When I became an adult, I left the house, and made sure never to measure myself. I was never fond of buying new clothes."]
   [:a {:href "#" :on-click #(put! bchan :fight)} "Continue"]])

(defmethod perished.screen.view :cutscene [state bchan]
  (cutscene state bchan))
