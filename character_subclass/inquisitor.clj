(ns perished.character-subclass.inquisitor
  (:use perished.character-subclass))

(def medical-treatment
  (->Skill "Medical Treatment"
          "Heal target for 4 health."
          [:healing]
          :ally 0
          identity))

(def agents-flintlock
  (->Skill "Agent's Flintlock"
          "Physical. Deals 4 damage to one target."
          [:damge/physical]
          :enemy 0
          identity))

(def true-skeptic
  (->Skill "True Skeptic"
          "Is immune to [Believer]. Gains [Skeptic] at the start of the battle."
          [:after/attack :before/battle :status/skeptic]
          :passive 0
          identity))

(def field-doctor
  (->Skill "Field Doctor"
          "Removes one status from a random ally at the end of the turj."
          [:after/turn]
          :passive 6
          identity))

(def thumb-screws
  (->Skill "Thumb Screws"
          "Physical. Deals 2 damage and adds [Thumb Screws] to target."
          [:damage/physcial :status/thumb-screws]
          :enemy 0
          identity))

(def mark-of-the-hound
  (->Skill "Mark of the Hound"
          "Adds [Skeptic] to target."
          [:status/skeptic]
          :passive 0
          identity))

(def blessed
  (->Skill "Blessed"
          "Recover 1 health at the end of the turn."
          [:after/turn]
          :passive 0
          identity))

(def inquisitor
  (->CharacterSubclass 
    "Inquisitor"
    (->SkillSet [medical-treatment agents-flintlock] 
               [true-skeptic field-doctor])
    (->SkillSet [mark-of-the-hound thumb-screws] 
               [blessed])))
