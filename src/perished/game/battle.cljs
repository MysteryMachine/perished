(ns perished.game.battle
  (:require [cljs.core.async :as async :refer [put!]]
            [perished.game :as g]
            [perished.character :as c]
            [perished.battle :as b]))

(defmulti target b/target-dispatch)

(defmethod target :self [state skill character]
  (assoc-in state
            b/target-data-in 
            {:skill skill
             :valid-targets {character true} }))

(defmethod target :ally [state skill character]
  (assoc-in state
            b/target-data-in
            {:skill skill
             :multi false
             :valid-targets 
             (reduce (fn [tmap char] (assoc tmap char true))
                     {}
                     (b/party-> state))}))

(defmethod target :allies [state skill character]
  (assoc-in state
            b/target-data-in
            {:skill skill
             :multi true
             :valid-targets 
             (reduce (fn [tmap char] (assoc tmap char true))
                     {}
                     (b/party-> state))}))

(defmulti handle-input b/input-dispatch)
(defmethod handle-input :default [_ state] state) 

(defn set-hover [state button] (assoc-in state b/hover-in (second button)))
(defmethod handle-input :hover [button state] (set-hover state button))

(defmethod handle-input :select-skill [button state]
  (let [character (b/character-> state)
        skill (get (c/actives character) (second button))]
    (-> state 
        (assoc-in b/menu-in :target)
        (target skill character)))) 

(defmethod handle-input :select-target [_ state]
  (let [char-num (b/char-num-> state)] 
    (-> state 
        (assoc-in b/selected-skills-in
                  (b/updated-selected-skills state char-num))
        (assoc-in b/menu-in :root)
        (assoc-in b/char-num-in (inc char-num)))))

(defmulti battle b/battle-dispatch)
(defmethod battle :target [state [button & _]] (handle-input button state))
(defmethod battle :input [state [button & _]] (handle-input button state))

(defmethod g/game :battle [state inputs] (battle (g/default state inputs) inputs))
