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
     :selected-skills []}))
		 
(defn input-dispatch [button &_]
  (if (vector? button) (first button) :default))
(defn targeting-dispatch [_ skill] (:target skill))
(defn battle-dispatch [state & _] (-> state :page-state :state))
 
(def page-state-in [:page-state])
(def input-state-in (conj page-state-in :input-state))
(def hover-in (conj input-state-in :hover))
(def temp-selected-skill-in (conj page-state-in :temp-selected-skill))
(def menu-in (conj input-state-in :menu))
(def targeting-data-in (conj page-state-in :targeting-data))
(def char-num-in [:page-state :input-state :character])
(def party-in (conj page-state-in :party))
(def enemies-in (conj page-state-in :enemies))
(def selected-skills-in (conj page-state-in :selected-skills))
 
(defn input-state-> [state] (get-in state input-state-in))
(defn char-num-> [state] (get-in state char-num-in))
(defn party-> [state] (get-in state party-in))
(defn character-> [state] (get (party-> state) (char-num-> state)))
(defn targeting-data-> [state] (get-in state targeting-data-in))
(defn skill-> [state] (:skill (targeting-data-> state)))
(defn selected-skills-> [state] (get-in state selected-skills-in))
(defn active-character-> [state]  
  (get (party-> state) (char-num-> state)))
(defn enemies-> [state] (get-in state enemies-in))
(defn hover-> [state] (get-in state hover-in))
(defn menu-> [state] (get-in state menu-in))
(defn page-state-> [state] (get-in state [:page-state :state]))
(defn valid-targets-> [state]
  (:valid-targets (get-in state targeting-data-in)))
(defn multi-target-> [state]
  (:multi (get-in state targeting-data-in)))
 
(defn active-skills [state] (vec (c/actives (active-character-> state))))
(defn updated-selected-skills [state target]
  (conj (selected-skills-> state) (-> (targeting-data-> state)
                                      (assoc :target target)
                                      (dissoc :valid-targets)
                                      (dissoc :multi))))
