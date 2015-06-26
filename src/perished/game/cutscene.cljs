(ns perished.game.cutscene
  (:require [perished.game :as g]
            [perished.transitions :refer [transition]]))

(defn cutscene-dispatch [state & _] (-> state :page-state :name))
(defmulti cutscene cutscene-dispatch)

(defmethod cutscene :intro [state [button & _]]
  (cond (= button :fight) (transition :battle state (:party state))
        :else state))

(defmethod g/game :cutscene [state inputs]
  (cutscene (g/default state inputs) inputs))
