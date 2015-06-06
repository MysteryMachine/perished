(ns perished.game.intro
  (:require [perished.game]
            [perished.transitions :refer [transition]]))

(defn input-dispatch [state [button & _]] button)
(defmulti handle-input input-dispatch)

(defmethod handle-input :fight [state [button & _]]
  (transition :battle state []))

(defmethod handle-input :default [state _] state)

(defmethod perished.game.game :intro [state inputs]
  (handle-input state inputs))
