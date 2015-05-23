(ns perished.character-defs
  (:require [perished.character :as c
             :refer [Class SkillSet CharDef]]))

(def lithographer 
  (Class. 
    "Lithographer"
    (SkillSet. [] 
               [])
    (SkillSet. [] 
               [])))

(def classes 
  [lithographer])

(defn random-char-def [] (CharDef. lithographer lithographer))

