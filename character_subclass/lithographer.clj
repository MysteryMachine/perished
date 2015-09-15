(ns perished.character-subclass.lithographer
  (:use perished.character-subclass))

(def press 
  (->Skill "Press" 
          "Physical. Deals 1 damage to enemy party." 
          [:damage/physical] 
          :enemies 0
          identity))
(def block 
  (->Skill "Block" 
          "+3 priority. Takes first phsycial attack executed by an enemy unit. Reduces that damage by 1, to a minimum of 0."
          [:damage/physical] 
          :self 3
          identity))
(def stone-defense 
  (->Skill "Stone Defense" 
          "Reduces any incoming physical damage by 2 points, to a minimum of 1."
          [:before :damage/physical]
          :passive 0
          identity))
(def industrial-process 
  (->Skill "Industrial Process" 
          "Deal 1 extra physical damage when attacking with the same physical attack consecutively."
          [:after :attack :repeated]
          :passive 0
          identity))
(def coat-weapon 
  (->Skill "Coat Weapon" 
          "Adds [Poison Brand] to self." 
          [:buff]
          :self 0
          identity))
(def solvent 
  (->Skill "Solvent" 
          "Removes [Poison] from target. If [Poison] is removed, heal the target by 1 HP." 
          [:debuff :status/poison :heal]
          :ally 0
          identity))
(def printers-apron 
  (->Skill "Printer's Apron" 
          "When [Poison] is applied to this character by an enemy, apply it to the enemy instead."
          [:after :status/poison]
          :passive 0
          identity))

(def lithographer 
  (->CharacterSubclass 
    "Lithographer"
    (->SkillSet [press block] 
               [stone-defense industrial-process])
    (->SkillSet [coat-weapon solvent] 
               [printers-apron])))
