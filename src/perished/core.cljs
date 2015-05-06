(ns ^:figwheel-always perished.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!) 

(defrecord SkillDef [passives actives])
(defrecord SkillClass [name major minor])
(def lithographer 
  (SkillClass. "Lithographer"
            (SkillDef. [] [])
            (SkillDef. [] [])))
(def character-classes [lithographer])

(defrecord CharacterClass
  ;; health - a number declaring  health left
  ;; class and subclass are of type ChClass
  ;; status is of type [Passive] 
  [chclass sub-chclass])

(defmulti max-health (comp :class :name))
(defmethod max-health "Lithographer" [_]  10)

(defn actives [char] 
  (concat (.. char class major major actives) (.. char class minor minor actives)))
(defn passives [char] 
  (flatten [(.. char chclass passives) 
            (.. char sub-chclass sub-passives)
            (.statuses char)]))

(defn random-class [] (CharacterClass. lithographer lithographer))


(defn new-map [] { "Castle Gates" false 
                   "Crypt" false
                   "Graveyard" false
                   "Throne Room" false })

(def app-state 
  (atom { :party [(random-class) (random-class)
                  (random-class) (random-class)]
          :game-map (new-map)
          :battle []}))

(om/root
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (apply dom/div 
               nil
               (let [{:keys [game-map battle party]} @app-state] 
                 (println party)
                 [(dom/div nil (str "game: "  game-map))
                  (dom/div nil (str "battle: " battle))
                  (dom/div #js{:style #js{:padding-left "20px"}} (str party))])))))
  app-state
  {:target (. js/document (getElementById "app"))})
