(ns perished.map)

(defrecord Location [name x y visited])

(defn new-location 
  "Creates a new unvisited Location"
  [name x y] (Location. name x y false))
