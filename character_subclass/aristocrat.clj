(ns perished.character-subclass.aristocrat
  (:use perished.character-subclass))

(def duel
  (->Skill "Duel"
          "Physical, 6+ priority. Deals 3 damage. Applies [Poison] to self and enemy. Applies [Stun] to enemy."
          [:physical :status/stun :status/poison]
          :enemy 6
          identity))

(def murder-most-foul
  (->Skill "Murder Most Foul"
          "Physical. Deal 3 damage, plus 2 damage if the target has [Poison]."
          [:physical :status/poison]
          :enemy 0
          identity))

(def dull-revenge
  (->Skill "Dull Revenge"
          "Physical. Deals 2 damage to attacker after being attacked."
          [:after :attack]
          :passive 0
          identity))

(def bloodied-hands
  (->Skill "Bloodied Hands"
          "Gains [Berserk] after killing an enemy."
          [:after :kill :status/beserk ]
          :passive 0
          identity))

(def truth-in-jest
  (->Skill "Truth In Jest"
          "Magical. Deals 3 armor ignoring damage."
          [:magical :ignore-armor]
          :enemy 0
          identity))

(def pour-pestilence
  (->Skill "Pour Pestilence"
          "Target gains [Confused]"
          [:status/confused]
          :enemy 0
          identity))

(def star-crossed
  (->Skill "Star Crossed"
          "Deal 1 bonus damage has [Poison]."
          [:after :status/poison]
          :passive 0
          identity))

(def aristocrat
  (->CharacterSubclass 
    "Aristocrat"
    (->SkillSet [duel murder-most-foul] 
               [dull-revenge bloodied-hands])
    (->SkillSet [truth-in-jest pour-pestilence] 
               [star-crossed])))
