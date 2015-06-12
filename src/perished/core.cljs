(ns perished.core
  (:require [jamesmacaulay.zelkova.window]
            [reagent.core :as reagent :refer [atom]]
            [perished.lib :as l :include-macros true]
            [perished.map :as m]
            [perished.character-defs :as cd]

            [perished.screen :as s]
            [perished.screen.menu]
            [perished.screen.intro]
            [perished.screen.battle]

            [perished.game :as g :include-macros true]
            [perished.game.menu]
            [perished.game.intro]
            [perished.game.battle]))

(enable-console-print!) 

(defonce state 
  (atom {:game-state :menu
         :page-state nil
         :party (l/rtake 4 (cd/random-char-def))
         :game-map m/locations }))

(g/defgame perished state g/game s/view)
