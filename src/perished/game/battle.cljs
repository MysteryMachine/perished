(ns perished.game.battle
  (:require [perished.game :as g]
            [perished.character :as c]))

(def hover-search [:page-state :input-state :hover])
(defn input-dispatch [button &_]
  (cond 
   (vector? button) (first button)
   :else :default))
(defmulti handle-input input-dispatch)


(defmulti target #(%1))
(defmethod target :self [_ character state] state
  {:valid-targets [character]
   :targetting 0})

(defmethod handle-input :hover [button state]
  (assoc-in state hover-search (second button)))
(defmethod handle-input :select-skill [button state]
  (let [char-num (-> state :page-state :input-state :character)
        character (get (-> state :page-state :party) char-num)
        skill-num (second button)
        characters-skills (c/actives character)
        skill (get characters-skills skill-num)
        selected-skills (-> state :page-state :selected-skills)
        new-selected-skills (assoc selected-skills char-num [skill []])]
    (-> state 
        (assoc-in [:page-state :selected-skills] new-selected-skills)
        (assoc-in [:page-state :state] :target)
        (assoc-in [:page-state :data] (target (:target skill) character state)))))
(defmethod handle-input :select-target [_ state]
  (let [data (-> state :page-state :data)
        target (get (:valid-targets data) (:targetting data))]
    (assoc-in state [:page-state :state] :input)))
(defmethod handle-input :default [_ state] state)

(defn battle-dispatch [state & _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :target [state [button & _]]
  (handle-input button state))
(defmethod battle :input [state [button & _]]
  (handle-input button state))

(defmethod g/game :battle [state [input _ screen-size :as inputs]]
  (battle (g/default state inputs) inputs))
