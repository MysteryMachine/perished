(ns perished.character)

(defrecord Skill
  [name description tags 
   target priority function])
(defrecord SkillSet  
  [active-skills passive-skills])
(defrecord Class     
  [name major-skills minor-skills])
(defrecord CharDef   
  [major-class minor-class])
(defrecord Character 
  [char-def health statuses])

(defmulti  minor-skillset 
 "Given a Character or CharDef, returns the minor SkillSet of its minor Class"
  type)
(defmethod minor-skillset Character [pchar] (-> pchar :char-def minor-skillset))
(defmethod minor-skillset CharDef   [char-def] (-> char-def :minor-class :minor-skills))

(defmulti  major-skillset 
  "Given a Character or CharDef, returns the major SkillSet of its major Class"
  type)
(defmethod major-skillset Character [pchar] (-> pchar :char-def major-skillset))
(defmethod major-skillset CharDef   [char-def] (-> char-def :major-class :major-skills))

(defn actives [c] 
  "Given a CharDef or a Character,returns a collection of
   all active skills associated with that character.
   c -> a CharDef or Character"
  (vec
   (flatten [(-> c major-skillset :active-skills ) 
             (-> c minor-skillset :active-skills)])))
(defn passives [c] 
  "Given a CharDef or Character, returns a collection of
   all passive skills associated with that character
   c -> a CharDef or Character"
  (vec
   (flatten [(-> c major-skillset :passive-skills) 
             (-> c minor-skillset :passive-skills)
             (if (= Character (type c)) 
               (:statuses c)
               [])])))

(defn max-health [c]
  "Returns the max of a CharDef or Character using its passives"
  (reduce #(+ %1 (get %2 :max-health)) 0 (passives c)))

(defn new-character [char-def] 
  "Creates a new Character from a CharDef"
  (Character. char-def (max-health char-def) []))
