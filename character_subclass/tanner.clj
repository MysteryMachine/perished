(ns perished.character-subclass.tanner
  (:use perished.character-subclass))

(def tan-hide
  (->Skill "Tan Hide"
          "Physical. Deals 1 damage plus half of missing health to target."
          [:damage/physical]
          :enemy 0
          identity))

(def lycanthropy
  (->Skill "Lycanthropy"
          "You were a werewolf all along! Adds [Werewolf] to Tanner."
          [:status/werewolf]
          :self 0
          identity))

(def tough-skin
  (->Skill "Tough Skin"
          "The Tanner can only die if attacked with 1 hit point."
          [:after/attacked]
          :passive 6
          identity))

(def pitiful
  (->Skill "Pitiful"
          "Add [Spooked] to the member of the enemy party with the most health."
          [:after/turn :status/spooked]
          :passive 0
          identity))

(def plead-for-death
  (->Skill "Plead for Death"
          "Target must attack the Tanner on their next turn."
          [:status/taunted]
          :enemy 0
          identity))

(def reckless-strike
  (->Skill "Reckless Strike"
          "Physical. Target takes 4 damage. Tanner takes 1 armor ignoring damage. Cannot use move if it would cause its user to die."
          [:damage/physical :armor-ignoring]
          :enemy 0
          identity))

(def carcinogenic-blood
  (->Skill "Carcinogenic Blood"
          "Targets that attack the Tanner physically gain [Poison]"
          [:status/poison :after/attack]
          :passive 0
          identity))

(def tanner
  (->CharacterSubclass 
    "Tanner" 10
    (->SkillSet [tan-hide lycanthropy] 
               [tough-skin pitiful])
    (->SkillSet [plead-for-death reckless-strike] 
               [carcinogenic-blood])))
