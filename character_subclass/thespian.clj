(ns perished.character-subclass.thespian
  (:use perished.character-subclass))

(def mimic
  (->Skill "Mimic"
          "Magic damage. -1 priority. Copies move used by target. Deals only magic damage."
          [:damage/magic]
          :all -1
          identity))

(def fake-death
  (->Skill "Fake Death"
          "Heal self for 4 health. Adds [Play Dead] to self."
          [:heal :status/play-dead]
          :self 0
          identity))

(def opposite-of-people
  (->Skill "Opposite of People"
          "The Thespian copies the top passive skill of an enemy when attacking it."
          [:copy]
          :passive 0
          identity))

(def show-must-go-on
  (->Skill "Show Must Go on"
          "Immune to [Sleep] and [Stun]."
          [:immunity :status/sleep :status/stun]
          :passive 0
          identity))

(def off-state-death
  (->Skill "Off-Stage Death"
          "Magical. Deals 2 damage. Kills the target if it is left with 3 health or less after the attack."
          [:damage/magical :status/dead]
          :enemy 0
          identity))

(def monologue
  (->Skill "Monologue"
          "Adds [Sleep] to target."
          [:status/sleep]
          :enemy 0
          identity))

(def memorized-lines
  (->Skill "Memorized Lines"
          "+1 priority when targeting the same target twice in a row."
          [:priority :retarget]
          :passive 0
          identity))

(def thespian
  (->CharacterSubclass 
    "Thespian"
    (->SkillSet [mimic fake-death] 
               [opposite-of-people show-must-go-on])
    (->SkillSet [off-state-death monologue] 
               [memorized-lines])))
