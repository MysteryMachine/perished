(ns perished.core
  (:require [reagent.core :as reagent :refer [atom]]
            [perished.lib :as l :include-macros true]
            [perished.screen :as s] 
            [perished.map :as m]
            [perished.character-defs :as cd]
            [perished.game :as g :include-macros true]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]))

(enable-console-print!) 
 
(defonce init-state 
  (atom {:view :menu
         :party (l/rtake 4 (cd/random-char-def))
         :game-map m/locations }))

(g/defgame perished init-state g/game s/view)

#_(let [button-chan (cljs.core.async/chan)
      app-signal 
      (let [time-deltas (time/fps 30)
            inputs (->> 
                    (z/map 
                     identity
                     (z/input identity 
                              ::button 
                              button-chan))
                          (z/sample-on time-deltas))]
           (z/reductions g/game @init-state inputs))]
     (z/pipe-to-atom app-signal init-state)
     (defn perished []
       (reagent/render-component
         [(fn [] 
            (let [data @init-state]
              (s/view data button-chan)))]
         (.getElementById js/document "app"))) 
     (perished))

#_(clojure.core/let 
    [button-chan__21866__auto__ (cljs.core.async/chan) 
     app-signal__21867__auto__ 
     (clojure.core/let [time-deltas__21868__auto__ (jamesmacaulay.zelkova.time/fps 30) 
                        inputs__21869__auto__ (clojure.core/->> 
                                               (jamesmacaulay.zelkova.signal/map 
                                                clojure.core/identity 
                                                (jamesmacaulay.zelkova.signal/input clojure.core/identity 
                                                                                    :perished.game/button 
                                                                                    button-chan__21866__auto__)) 
                                               (jamesmacaulay.zelkova.signal/sample-on time-deltas__21868__auto__))] 
       (jamesmacaulay.zelkova.signal/reductions g/game (clojure.core/deref init-state) inputs__21869__auto__))] 
  (jamesmacaulay.zelkova.signal/pipe-to-atom app-signal__21867__auto__ init-state) 
  (clojure.core/defn perished [] 
    (reagent.core/render-component 
     [(fn* [] (s/view (clojure.core/deref init-state) button-chan__21866__auto__))] 
     (.getElementById js/document "app"))) 
  (perished))
