(ns perished.battle
  (:require [perished.character :refer [new-character]]))

(defn new-battle [state enemies]
  (let [party (map new-character (:party state))
        enemies (map new-character enemies)]
    {:state :input
     :input-state {:character 0
                   :menu :root}
     :party (vec party)
     :enemies (vec enemies)
     :selected-skills {}}))
