(ns perished.game.battle
  (:require [cljs.core.async :as async :refer [put!]]
            [perished.game :as g]
            [perished.character :as c]))

(def hover-search [:page-state :input-state :hover])

(defmulti target (fn [i & _] i))
(defmethod target :self [_ character state] state
  {:valid-targets [character]
   :targetting 0})

(defn input-dispatch [button &_]
  (cond 
   (vector? button) (first button)
   :else :default))
(defmulti handle-input input-dispatch)

(defmethod handle-input :hover [button state]
  (assoc-in state hover-search (second button)))

(defmethod handle-input :select-skill [button state]
  (let [char-num (-> state :page-state :input-state :character)
        character (get (-> state :page-state :party) char-num)
        skill-num (second button)
        characters-skills (c/actives character)
        skill (get characters-skills skill-num)]
    (-> state 
        (assoc-in [:page-state :temp-selected-skill] skill)
        (assoc-in [:page-state :input-state :menu] :target)
        (assoc-in [:page-state :data] (target (:target skill) character state)))))

(defmethod handle-input :select-target [_ state]
  (let [pgstate (-> state :page-state)
        data (:data pgstate)
        char-num (-> state :page-state :input-state :character)
        character (get (-> state :page-state :party) char-num)
        target (get (:valid-targets data) (:targetting data))
        skill (:temp-selected-skill pgstate)
        selected-skills (-> state :page-state :selected-skills)
        new-selected-skills (assoc selected-skills char-num [skill target])] 
    (-> state 
        (assoc-in [:page-state :input-state :menu] :root)
        (assoc-in [:page-state :input-state :character] (inc char-num)))))

(defmethod handle-input :default [_ state] state) 

(defn battle-dispatch [state & _] (-> state :page-state :state))
(defmulti battle battle-dispatch)
(defmethod battle :target [state [button & _]]
  (handle-input button state))
(defmethod battle :input [state [button & _]]
  (handle-input button state))

(defmethod g/game :battle [state [input _ screen-size :as inputs]]
  (battle (g/default state inputs) inputs))
