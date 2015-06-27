(ns perished.game.battle
  (:require [perished.game :as g]))

(defn input-dispatch [button _] button)
(defmulti handle-input input-dispatch)
(defmethod handle-input :default [_ state] state)

(defn battle-dispatch [state & _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state [button & _]]
  (handle-input button state))

(def hover-search [:page-state :hover])
(defn handle [state input]
  (if (= :none input)
    (assoc-in state hover-search false)
    (assoc-in state hover-search input)))

(defmethod g/game :battle [state [input _ screen-size :as inputs]]
  (battle (-> state 
              (g/default inputs)
              (handle input)) 
          inputs))
