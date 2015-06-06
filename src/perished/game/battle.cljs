(ns perished.game.battle
  (:require [perished.game]))

(defn input-dispatch [button _] button)
(defmulti handle-input input-dispatch)
(defmethod handle-input :default [_ state] state)

(defn battle-dispatch [state & _] (:state state))
(defmulti battle battle-dispatch)
(defmethod battle [:input 1] [state [button & _]]
  (handle-input button state))

(defmethod perished.game.game :battle [state inputs]
  (battle state inputs))
