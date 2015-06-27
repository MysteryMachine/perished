(ns perished.game
  (:require [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.time :as time]
            [perished.screen.helpers :as s]))

(defn game-dispatch [state _] (:game-state state))
(defmulti game game-dispatch)
(defmethod game :default [state _]
  state) 

(defn default [state [button fps screen]]
  (-> state 
      (assoc :window-height (s/convert-height (first screen)))
      (assoc :window-width (first screen))
      (assoc :fps fps)))
