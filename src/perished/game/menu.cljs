(ns perished.game.menu
  (:require [perished.game :as g]
            [perished.transitions :refer [transition]]))

(defn menu-dispatch [state & _] (-> state :page-state :name))
(defmulti menu menu-dispatch)

(defmethod menu :start-menu [state [button & _]]
  (cond (= button :new-game) (transition :cutscene state :intro)
        :else state))

(defmethod g/game :menu [state inputs] 
  (menu (g/default state inputs) inputs))  
 
