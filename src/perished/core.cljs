(ns perished.core
  (:require [cljs.core.async :as async]
            [reagent.core :as reagent :refer [atom]]
            [jamesmacaulay.zelkova.signal :as zelkova]
            [perished.lib :as l :include-macros true]
            [perished.map :as m :include-macros true]
            [perished.character :as c]
            [perished.screen :as s] 
            [perished.game :as g :include-macros true]))

(enable-console-print!) 

(def lithographer 
  (c/Class. "Lithographer"
            (c/SkillSet. [] [])
            (c/SkillSet. [] [])))

(def classes 
  [lithographer])

(defn random-char-def [] (c/CharDef. lithographer lithographer))

(def locations
  (map (fn [[name x y]] (m/new-location name x y)) 
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
 
(def init-state 
  {:perished.screen/stage :menu
   :party (l/rtake 4 (random-char-def))
   :game-map locations })
  
(g/defgame perished init-state g/signal s/view) 
(init)

(defn on-js-reload []) 
