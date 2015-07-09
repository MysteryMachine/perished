(ns perished.game.battle
  (:require [perished.game :as g]
            [perished.character :as c]))

(def hover-search [:page-state :input-state :hover])
(defn input-dispatch [button &_]
  (cond 
   (vector? button) (first button)
   :else :default))
(defmulti handle-input input-dispatch)

(defmethod handle-input :hover [button state]
  (assoc-in state hover-search (second button)))
(defmethod handle-input :select-skill [button state]
  (let [char-num (-> state :page-state :input-state :character)
        skill-num (second button)
        selected-skills (-> state :page-state :selected-skills)
        character (get (-> state :page-state :party) char-num)
        characters-skills (c/actives character)
        skill (get characters-skills skill-num)
        new-selected-skills (assoc selected-skills char-num [skill []])
        updated-state (assoc-in state [:page-state :input-state :character] (+ 1 char-num))]
    (assoc-in updated-state 
              [:page-state :selected-skills] 
              new-selected-skills)))
(defmethod handle-input :default [_ state] state)

(defn battle-dispatch [state & _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :input [state [button & _]]
  (handle-input button state))

(defmethod g/game :battle [state [input _ screen-size :as inputs]]
  (battle (g/default state inputs) inputs))
