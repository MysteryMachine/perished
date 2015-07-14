(ns perished.character-defs.lithographer
  (:require [perished.character :as c 
           :refer [Class SkillSet Skill CharDef]]))

(def press 
  (Skill. "Press" 
          "Physical. Deals 1 damage to enemy party." 
          [:damage :physical :active] 
          :enemies 0
          (fn [] nil)))
(def block 
  (Skill. "Block" 
          "+3 priority. Takes first phsycial attack executed by an enemy unit. Reduces that damage by 1, to a minimum of 0."
          [:damage :physical :active] 
          :self 3
          (fn [] nil)))
(def stone-defense 
  (Skill. "Stone Defense" 
          "Reduces any incoming physical damage by 2 points, to a minimum of 1."
          [:passive]
          [:damage :physical] 0
          (fn [] nil)))
(def industrial-process 
  (Skill. "Industrial Process" 
          "Deal 1 extra physical damage when attacking with the same physical attack consecutively."
          [:passive]
          [:move :physical :repetition] 0
          (fn [] nil)))
(def coat-weapon 
  (Skill. "Coat Weapon" 
          "Adds [Poison Brand] to self." 
          [:active :buff]
          :self 0
          (fn [] nil)))
(def solvent 
  (Skill. "Solvent" 
          "Removes [Poison] from target. If [Poison] is remove, heal the target by 1 HP." 
          [:active :debuff]
          :ally 0
          (fn [] nil)))
(def printers-apron 
  (Skill. "Printer's Apron" 
          "When [Poison] is applied to this character by an enemy, apply it to the enemy instead."
          [:passive]
          [:buff :status/poison] 0
          (fn [] nil)))


(def lithographer 
  (Class. 
    "Lithographer"
    (SkillSet. [press block] 
               [stone-defense industrial-process])
    (SkillSet. [coat-weapon solvent] 
               [printers-apron])))
