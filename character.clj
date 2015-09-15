(ns perished.character
  (:require [perished.character-subclass.apothecary :refer [apothecary]]
            [perished.character-subclass.aristocrat :refer [aristocrat]]
            [perished.character-subclass.astronomer :refer [astronomer]]
            [perished.character-subclass.inquisitor :refer [inquisitor]]
            [perished.character-subclass.journeyman :refer [journeyman]]
            [perished.character-subclass.lithographer :refer [lithographer]]
            [perished.character-subclass.tanner :refer [tanner]]
            [perished.character-subclass.thespian :refer [thespian]]))

(defrecord CharacterClass  
  [major-subclass minor-subclass])
(defrecord Character 
  [character-class health statuses id])

(defmulti  minor-skillset 
 "Given a Character or CharacterClass, returns the minor SkillSet of its minor CharacterClass"
  type)
(defmethod minor-skillset Character [pchar] (-> pchar :character-class minor-skillset))
(defmethod minor-skillset CharacterClass [character-class] (-> character-class :minor-class :minor-skillset))

(defmulti  major-skillset 
  "Given a Character or CharacterClass, returns the major SkillSet of its major CharacterClass"
  type)
(defmethod major-skillset Character [pchar] (-> pchar :character-class major-skillset))
(defmethod major-skillset CharacterClass [character-class] (-> character-class :major-class :major-skillset))

(defn actives [c] 
  "Given a CharacterClass or a Character,returns a collection of
   all active skills associated with that character.
   c -> a CharacterClass or Character"
  (vec
   (flatten [(-> c major-skillset :active-skills ) 
             (-> c minor-skillset :active-skills)])))
(defn passives [c] 
  "Given a CharacterClass or Character, returns a collection of
   all passive skills associated with that character
   c -> a CharacterClass or Character"
  (vec
   (flatten [(-> c major-skillset :passive-skills) 
             (-> c minor-skillset :passive-skills)
             (if (= Character (type c)) 
               (:statuses c)
               [])])))

(defn max-health [c]
  "Returns the max of a CharacterClass or Character using its passives"
  (reduce #(+ %1 (get %2 :max-health)) 0 (passives c)))

(defonce new-id 
  (let [counter (atom 0)]
    (fn [] (swap! counter inc))))

(defn new-character [character-class] 
  "Creates a new Character from a CharacterClass"
  (->Character character-class (max-health character-class) [] (new-id)))

(def subclasses 
  [apothecary
   aristocrat
   astronomer
   inquisitor
   journeyman
   lithographer
   tanner
   thespian])

(defn random-character-class [] (->CharacterClass lithographer lithographer))
