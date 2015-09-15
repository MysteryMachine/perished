(ns perished.character-subclass.journeyman
  (:use perished.character-subclass))

(def desert-song
  (->Skill "Desert Song"
          "Heals all allies for 1 health. Heal for an extra point of health if the target is below 50% HP."
          [:healing]
          :allies 0
          identity))

(def scarf-snag
  (->Skill "Scarf Snag"
          "Physical. Deals 2 damage and adds [Stunned] to target."
          [:status/stun :damage/physical]
          :enemy 0
          identity))

(def resurrect
  (->Skill "Resurrect"
          "The Journeyman comes back to life with 3 hit points once slain, with no status effects. Works once per battle."
          [:status/resurrect :before/battle]
          :passive 0
          identity))

(def crimson-cloak
  (->Skill "Crimson Cloak"
          " The Journeyman takes 2 less damage from magical attacks, to a minimum of 1."
          [:after/attacked]
          :passive 0
          identity))

(def rug-pull
  (->Skill "Rug Pull"
          "Physical. Deal 1 damage to all enemies."
          [:damage/physical]
          :enemies 0
          identity))

(def huddle
  (->Skill "Huddle"
          "The Journeyman and the target of the Journeyman’s choice gain [Quick]."
          [:status/quick]
          :other-ally 0
          identity))

(def companion
  (->Skill "Companion"
          "The Journeyman heals the party member with the least health for 1 health."
          [:after/turn :healing]
          :passive 0
          identity))

(def journeyman
  (->CharacterSubclass 
    "Journeyman"
    (->SkillSet [desert-song scarf-snag] 
               [resurrect crimson-cloak])
    (->SkillSet [rug-pull huddle] 
               [companion])))
