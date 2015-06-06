(ns perished.battle
  (:require [perished.character :refer [new-character]]))

(defn new-battle [state enemies]
  (let [party (map new-character (:party state))
        enemies (map new-character enemies)]
    {:state [:input 1]
     :party party
     :enemies enemies}))
