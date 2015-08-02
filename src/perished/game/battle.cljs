(ns perished.game.battle
  (:require [cljs.core.async :as async :refer [put!]]
            [perished.game :as g]
            [perished.character :as c]
            [perished.battle :as b]))

(defn targeting-base [state skill multi targets]
  {:skill skill
   :valid-targets (into #{} targets)
   :multi multi
   :user (b/character-> state)})
(defmulti targeting-data b/targeting-dispatch)
(defmethod targeting-data :self [state skill]
  (targeting-base state skill false [(b/character-> state)]))
(defmethod targeting-data :ally [state skill]
  (targeting-base state skill false (b/party-> state)))
(defmethod targeting-data :allies [state skill]
  (targeting-base state skill true (b/party-> state)))
(defmethod targeting-data :enemy [state skill] 
  (targeting-base state skill false (b/enemies-> state)))
(defmethod targeting-data :enemies [state skill]
  (targeting-base state skill true (b/enemies-> state)))
 
(defn build-battle-queue [state]
  #_(let [player-moves (selected-skills)]))

(defn set-up-battle [state]
  (-> state
        (assoc-in b/char-num-in 0)
        (assoc-in b/page-state-in :resolving)
        (build-battle-queue)))

(defmulti handle-input b/input-dispatch)
(defmethod handle-input :default [_ state] state) 

(defn set-hover [state button] (assoc-in state b/hover-in (second button)))
(defmethod handle-input :hover [button state] (set-hover state button))

(defmethod handle-input :select-skill [button state]
  (-> state 
        (assoc-in b/menu-in :target)
        (assoc-in b/targeting-data-in 
                  (targeting-data state (second button))))) 

(defmethod handle-input :select-target [button state]
  (-> state 
      (assoc-in 
       b/selected-skills-in
       (b/updated-selected-skills  
        state 
        (if (b/multi-target-> state) :multi (second button))))
      (assoc-in b/menu-in :root)
      (assoc-in b/char-num-in (inc (b/char-num-> state)))))

(defmulti battle b/battle-dispatch)
(defmethod battle :target [state [button & _]] (handle-input button state))
(defmethod battle :input [state [button & _]] 
  (if (> (b/char-num-> state) 4)
    (set-up-battle state)
    (handle-input button state)))

(defmethod g/game :battle [state inputs] (battle (g/default state inputs) inputs))
