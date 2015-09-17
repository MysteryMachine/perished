(ns perished.scenes
  (:use arcadia.core))

(def scenes 
  {:title-screen 0
   :battle 1
   :map 2
   :menu 3
   :new-game 4
   :mentor-1 5
   :mentor-2 6
   :mentor-3 7
   :mentor-4 8
   :mentor-5 9
   :story-1 10
   :story-2 11
   :story-3 12
   :story-4 13
   :story-5 14
   :ending 15
   :true-ending 16})

(defn get-scene ^System.Int64 [^clojure.lang.Keyword key] (get scenes key))
 
