(ns perished.map)

(defrecord Location [name x y visited])

(defn new-location 
  "Creates a new unvisited Location"
  [name x y] (Location. name x y false))
(def locations
  (map (fn [[name x y]] (new-location name x y)) 
    [["Porticullis" 0 0]
     ["Throne Room" 0 0]
     ["Crypt" 0 0]
     ["Graveyard" 0 0]
     ["Barracks" 0 0]
     ["Ossuary" 0 0]
     ["Kitchen" 0 0]
     ["Servant's Quarters" 0 0]
     ["Great Hall" 0 0]
     ["Tower" 0 0]
     ["Gallows" 0 0]
     ["Courtyard" 0 0]
     ["Dungeon" 0 0]
     ["King's Chamber" 0 0]
     ["Princess' Chambers" 0 0]
     ["Stables" 0 0]
     ["Game Room" 0 0]
     ["Theatre" 0 0]
     ["Stables" 0 0]
     ["Chapel" 0 0]]))
