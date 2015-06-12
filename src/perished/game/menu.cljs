(ns perished.game.menu
  (:require [perished.game]
            [perished.transitions :refer [transition]]))

(defmethod perished.game.game :menu [state [button _ screen]] 
  (let [new-state (assoc state :window-width (first screen))]
   (if (= button :new-game) 
      (transition :intro new-state [])
      new-state)))
