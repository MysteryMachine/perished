(ns perished.core
  (:require [reagent.core :as reagent :refer [atom]]
            [perished.lib :as l :include-macros true]
            [perished.screen :as s] 
            [perished.map :as m]
            [perished.character-defs :as cd]
            [perished.game :as g :include-macros true]))

(enable-console-print!) 
 
(defonce init-state 
  (atom {:view :menu
         :party (l/rtake 4 (cd/random-char-def))
         :game-map m/locations }))

(g/defgame perished init-state g/game s/view)
