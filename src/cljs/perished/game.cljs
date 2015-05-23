(ns perished.game
  (:require [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.time :as time]))

(defn game-dispatch [state _] (:perished.screen/stage state))
(defmulti game game-dispatch)
(defmethod game :menu [state [buttons]] 
  state)

(defn signal [init-state btn-signal] 
  (let [time-deltas (time/fps 30)
        inputs (->> (z/map vector
                           btn-signal)
                    (z/sample-on time-deltas))]
    (z/reductions game init-state inputs)))
