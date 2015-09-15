(ns perished.character-subclass.apothecary
  (:use perished.character-subclass))

(def transmute
  (->Skill "Transmute"
          "Adds [Armored] to a target."
          [:status/armored]
          :party 0
          identity))

(def crimson-potion
  (->Skill "Crimson Potion"
          "Magical. Deals 1 damage to all targets, dealing additional damage for the number of deaths in the battle, to a max of 5 damage."
          [:damage/magical]
          :enemies 0
          identity))

(def equivalent-exchange
  (->Skill "Equivalent Exchange"
          "Whenever attacking magically, the Apothecary gains 1 health."
          [:before/attack :heal]
          :passive 0
          identity))

(def mysterious-tattoo
  (->Skill "Mysterious Tattoo"
          "Whenever attacking physically, the Apothecary gains +1 priority to their attack."
          [:before/attack]
          :passive 0
          identity))

(def potent-brew
  (->Skill "Potent Brew"
          "Adds [Berserk] to a target."
          [:status/berserk]
          :enemy 0
          identity))

(def katar
  (->Skill "Katar"
          "Physical. Deals 3 damage. Ignores armor."
          [:damage/physical :ignore-armor]
          :enemy 0
          identity))

(def homonculus
  (->Skill "Homonculus"
          "At the end of the Apothecary’s turn, their Homunculus deals 1 damage to the most damaged enemy on the field."
          [:after/attack]
          :enemies 0
          identity))

(def apothecary
  (->CharacterSubclass 
    "Apothecary"
    (->SkillSet [transmute crimson-potion] 
               [equivalent-exchange mysterious-tattoo])
    (->SkillSet [potent-brew katar] 
               [homonculus])))
