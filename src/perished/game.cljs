(ns perished.game
  (:require [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [jamesmacaulay.zelkova.keyboard :as keyboard]
            [jamesmacaulay.zelkova.time :as time]))

(defn game-dispatch [state _] (:game-state state))
(defmulti game game-dispatch)
(defmethod game :default [state _]
  state)
