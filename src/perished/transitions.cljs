(ns perished.transitions
  (:require [perished.battle :refer [new-battle]]))

(defn setup-dispatch [dispatch & _] dispatch)
(defmulti setup setup-dispatch)
(defmethod setup :default [& args] (println "setup dispatch failure"))

(defmethod setup :intro [_ state args & _] 0)
(defmethod setup :battle [_ state enemies & _]
  (new-battle state enemies))

(defn transition [dispatch state args]
  (-> state
      (assoc :game-state dispatch)
      (assoc :page-state (setup dispatch state args))))
