(ns perished.game
  (:require [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.time :as time]))

(defn game-dispatch [state _] (:view state))
(defmulti game game-dispatch)
(defmethod game :menu [state [button _]] 
  (if (= button :new-game) 
    (assoc state :view :intro)
    state))
