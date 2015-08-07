(ns perished.character-defs.astronomer
  (:require [perished.character :as c
             :refer [Class SkillSet Skill CharDef]]))

(def astral-hues
  (Skill. "Astral Hues"
          "Magical. Deals 3 damage to all enemies. Adds Status:Spooked to the Astronomer."
          [:damage/magical :status/spooked]
          :enemies 0
          identity))

(def star-sludge
  (Skill. "Star Sludge"
          "Adds Status:Believer, and Status:Berserk to target."
          [:status/believer :status/berserk]
          :enemy 0
          identity))

(def star-curse
  (Skill. "Star Curse"
          "Adds Status:Abducted if an attack causes the Astronomer’s health to go under 4."
          [:after/attacked]
          :passive 0
          identity))

(def true-believer
  (Skill. "True Believer"
          "Is immune to Status:Skeptic Starts the fight with Status:Believer."
          [:before/battle :status/believer :after/attacked]
          :passive 0
          identity))

(def fox-mark
  (Skill. "Mark of the Fox"
          "Adds Status:Believer to target."
          [:status/believer]
          :enemy 0
          identity))

(def astral-abduction
  (Skill. "Astral Abduction"
          "Adds Status:Abducted to target."
          [:status/abducted]
          :enemy 0
          identity))

(def spooky
  (Skill. "Spooky"
          "Adds Status:Spooked to a target if they attack the Astronomer."
          [:after/attacked]
          :passive 0
          identity))

(def astronomer
  (Class. 
    "Astronomer"
    (SkillSet. [astral-hues star-sludge] 
               [star-curse true-believer])
    (SkillSet. [astral-abduction fox-mark] 
               [spooky])))
