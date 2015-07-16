(ns perished.game
  (:require [cljs.core.async :as async :refer [chan]]
		        [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.time :as time]
						[jamesmacaulay.zelkova.window :as w]
            [perished.screen.helpers :as s]))

(defn game-dispatch [state _] (:game-state state))
(defmulti game game-dispatch)
(defmethod game :default [state _] state) 

(defn default [state [button fps screen]]
  (-> state 
      (assoc :window-height (s/convert-height (first screen)))
      (assoc :window-width (first screen))
      (assoc :fps fps)))

(defn new-game [app-atom game-fn view-fn]
  (let [button-chan (chan)
         app-signal
         (let [dt (time/fps 30)
               inputs (->> 
                        (z/map 
                          vector
                          (z/merge
                           (z/drop-repeats 
													 	(z/sample-on dt (z/input :none identity button-chan)))
                           (z/sample-on dt (z/constant :none)))
                          dt
                          w/dimensions)
                        (z/sample-on dt))]
           (z/reductions game-fn @app-atom inputs))]
     (z/pipe-to-atom app-signal app-atom)
     (fn game []
       (reagent.core/render-component
	        [#(view-fn @app-atom button-chan)]
        (.getElementById js/document "app")))))