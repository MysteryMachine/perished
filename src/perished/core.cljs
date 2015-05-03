(ns ^:figwheel-always perished.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!) 

(defrecord ChClass [name passives actions sub-passives sub-actions])
(def lithographer (ChClass. "Lithographer" [] [] [] []))
(def character-classes [lithographer])

(defrecord Character 
  ;; health - a number declaring  health left
  ;; class and subclass are of type ChClass
  ;; status is of type [Passive] 
  [health chclass sub-chclass statuses])

(defmulti max-health :name)
(defmethod max-health "Lithographer" [_]  10)

(defn actions [char] 
  (concat (.. char chclass actions) (.. char sub-chclass sub-actions)))
(defn passives [char] 
  (flatten [(.. char chclass passives) 
            (.. char sub-chclass sub-passives)
            (.statuses char)]))

(defn new-character [chclass sub-chclass]
  (Character. (max-health chclass) chclass sub-chclass [] ))
(defn player-character [] (new-character lithographer lithographer))


(defn new-map [] { "Castle Gates" false 
                   "Crypt" false
                   "Graveyard" false
                   "Throne Room" false })

(defonce app-state 
  (atom { :party [(player-character) (player-character)
                  (player-character) (player-character)]
          :map (new-map)}))

(om/root
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (dom/div nil 
                 (dom/h1 nil "hello") 
                 (dom/h2 nil "hello!")))))
  app-state
  {:target (. js/document (getElementById "app"))})
