(ns perished.game.battle
  (:require [perished.game :as g]))

(defn input-dispatch [button _] button)
(defmulti handle-input input-dispatch)
(defmethod handle-input :default [_ state] state)

(defn battle-dispatch [state & _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state [button & _]]
  (handle-input button state))

(defmethod g/game :battle [state [button _ screen-size :as inputs]]
  (battle (g/default state inputs) inputs))
