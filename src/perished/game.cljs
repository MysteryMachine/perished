(ns perished.game
  (:require [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.time :as time]))

(defn game-dispatch [state _] (:view state))
(defmulti game game-dispatch)
(defmethod game :default [state _]
  state)
(defmethod game :menu [state [button & _]] 
  (if (= button :new-game) 
    (assoc state :view :intro)
    state))

(defmulti intro-dispatch (fn [state [button & _]] button))
(defmethod intro-dispatch :next [state [button & _]]
  (assoc state :page (inc (:page state))))
(defmethod intro-dispatch :default [state _] state)
(defmethod game :intro [state inputs]
  (intro-dispatch state inputs))
