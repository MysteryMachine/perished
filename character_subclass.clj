(ns perished.character-subclass)

(defrecord Skill [name description tags target priority function])
(defrecord SkillSet [active-skills passive-skills])
(defrecord CharacterSubclass [name major-skillset minor-skillset])

