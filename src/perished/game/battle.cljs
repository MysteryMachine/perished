(ns perished.game.battle
  (:require [perished.game :as g]))

(def hover-search [:page-state :input-state :hover])
(defn input-dispatch [button &_]
  (cond 
   (vector? button) (first button)
   :else :default))
(defmulti handle-input input-dispatch)

(defmethod handle-input :hover [button state]
  (assoc-in state hover-search (second button)))
(defmethod handle-input :default [_ state] state)

(defn battle-dispatch [state & _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state [button & _]]
  (handle-input button state))

(defmethod g/game :battle [state [input _ screen-size :as inputs]]
  (battle (g/default state inputs) inputs))
