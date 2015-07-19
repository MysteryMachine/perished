(ns perished.battle
  (:require [perished.character :as c :refer [new-character]]))

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

(def page-state-in [:page-state])
(def input-state-in (conj page-state-in :input-state))
(def hover-in (conj input-state-in :hover))
(def temp-selected-skill-in (conj page-state-in :temp-selected-skill))
(def menu-in (conj input-state-in :menu))
(def target-data-in (conj page-state-in :target-data))
(def char-num-in [:page-state :input-state :character])
(def party-in (conj page-state-in :party))
(def enemies-in (conj page-state-in :enemies))
(def selected-skills-in (conj page-state-in :selected-skills))
 
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
(defn active-character-> [state]  
  (get (party-> state) (char-num-> state)))
(defn enemies-> [state] (get-in state enemies-in))
(defn hover-> [state] (get-in state hover-in))
(defn menu-> [state] (get-in state menu-in))
(defn page-state-> [state] (get-in state [:page-state :state]))
 
(defn active-skills [state] (vec (c/actives (active-character-> state))))
(defn hover-description [state] (get (active-skills state) (hover-> state)))
(defn skill-selection [state] [(skill-> state) (target-> state)])
(defn updated-selected-skills [state char-num]
  (assoc (selected-skills-> state) char-num (skill-selection state)))
