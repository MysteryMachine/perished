(ns perished.character
  (:require [clojure.edn :as edn]
            [perished.character-subclass.apothecary :refer [apothecary]]
            [perished.character-subclass.aristocrat :refer [aristocrat]]
            [perished.character-subclass.astronomer :refer [astronomer]]
            [perished.character-subclass.inquisitor :refer [inquisitor]]
            [perished.character-subclass.journeyman :refer [journeyman]]
            [perished.character-subclass.lithographer :refer [lithographer]]
            [perished.character-subclass.tanner :refer [tanner]]
            [perished.character-subclass.thespian :refer [thespian]]))

(def subclasses 
  [apothecary
   aristocrat
   astronomer
   inquisitor
   journeyman
   lithographer
   tanner
   thespian])

(def subclass-map
  {"Apothecary" apothecary
   "Aristocrat" aristocrat
   "Astronomer" astronomer
   "Inquisitor" inquisitor
   "Journeyman" journeyman
   "Lithographer" lithographer
   "Tanner" tanner
   "Thespian" thespian})

(defmulti max-health type)

(defrecord CharacterClass  
  [major-subclass minor-subclass]
  Object
  (ToString [this] (str [(:name major-subclass) (:name minor-subclass)])))

(defrecord Character 
  [character-class health statuses id]
  Object
  (ToString [this] 
    (str "#Character{:character-class " character-class 
         " :id " id "}")))

(defn character-reader [{:keys [character-class id]}]
  (let [[major minor] (map #(get subclass-map %) character-class)] 
    (->Character (->CharacterClass major minor) (:health major) [] id)))

(defn read-party [s]
  (edn/read-string 
   {:readers 
    {'Character character-reader}}
   s))

(defmulti  minor-skillset 
 "Given a Character or CharacterClass, returns the minor SkillSet of its minor CharacterClass"
  type)
(defmethod minor-skillset perished.character.Character 
  [pchar] (-> pchar :character-class minor-skillset))
(defmethod minor-skillset perished.character.CharacterClass 
  [character-class] (-> character-class :minor-subclass :minor-skillset))

(defmulti  major-skillset 
  "Given a Character or CharacterClass, returns the major SkillSet of its major CharacterClass"

  type)
(defmethod major-skillset perished.character.Character 
  [pchar] (-> pchar :character-class major-skillset))
(defmethod major-skillset perished.character.CharacterClass 
  [character-class] (-> character-class :major-subclass :major-skillset))

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
             (if (= perished.character.Character (type c)) 
               (:statuses c)
               [])])))

(defmethod max-health perished.character.Character 
  [c] (-> c :character-class max-health))
(defmethod max-health perished.character.CharacterClass 
  [c] (-> c :major-subclass :health))

(defonce new-id 
  (let [counter (atom 0)]
    (fn [] (swap! counter inc))))

(defn random-character-class [] 
  (->CharacterClass (rand-nth subclasses) (rand-nth subclasses)))

(defn random-character [] 
  "Creates a new Character from a CharacterClass"
  (let [char-class (random-character-class)]
    (->Character char-class (max-health char-class) [] (new-id))))

(defn random-party [] (take 4 (repeatedly random-character)))
