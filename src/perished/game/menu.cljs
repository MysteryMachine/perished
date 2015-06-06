(ns perished.game.menu
  (:require [perished.game]
            [perished.transitions :refer [transition]]))

(defmethod perished.game.game :menu [state [button & _]] 
  (if (= button :new-game) 
    (transition :intro state [])
    state))
