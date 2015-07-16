(ns perished.battle
  (:require [perished.character :refer [new-character]]))

(defn new-battle [state enemies]
  (let [party (map new-character (:party state))
        enemies (map new-character enemies)]
    {:state :input
     :input-state {:character 0
                   :menu :root}
     :party (vec party)
     :enemies (vec enemies)
     :selected-skills {}}))
		 
(defn input-dispatch [button &_]
	(if (vector? button) (first button) :default))
(defn target-dispatch [_ skill & _] (:target skill))
(defn battle-dispatch [state & _] (-> state :page-state :state))

(def hover-in [:page-state :input-state :hover])
(def temp-selected-skill-in [:page-state :temp-selected-skill])
(def menu-in [:page-state :input-state :menu])
(def target-data-in [:page-state :target-data])
(def char-num-in [:page-state :input-state :character])
(def input-state-in [:page-state :input-state])
(def party-in [:page-state :party])
(def selected-skills-in [:page-state :selected-skills])
 
(defn input-state-> [state] (get-in state input-state-in))
(defn char-num-> [state] (get-in state char-num-in))
(defn party-> [state] (get-in state party-in))
(defn character-> [state] (get (party-> state) (char-num-> state)))
(defn target-data-> [state] (get-in state target-data-in))
(defn target-> [state] 
	(let [target-data (target-data-> state)]
		(get (:valid-targets target-data) (:targetting target-data))))
(defn skill-> [state] (:skill (target-data-> state)))
(defn selected-skills-> [state] (get-in state selected-skills-in))

(defn skill-selection [state] [(skill-> state) (target-> state)])
(defn updated-selected-skills [state char-num]
  (assoc (selected-skills-> state) char-num (skill-selection state)))