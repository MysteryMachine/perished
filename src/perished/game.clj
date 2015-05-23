(ns perished.game)
 
(defmacro defgame [game-name outer-atom game-fn view-fn]
  `(do 
     (def ~'button-chan 
       (cljs.core.async/chan))
     (def ~'app-signal
       (let [~'time-deltas (jamesmacaulay.zelkova.time/fps 30)
             ~'inputs (->> 
                     (jamesmacaulay.zelkova.signal/map 
                       vector
                       (jamesmacaulay.zelkova.signal/input nil ::button ~'button-chan)
                       ~'time-deltas)
                     (jamesmacaulay.zelkova.signal/sample-on ~'time-deltas))]
         (jamesmacaulay.zelkova.signal/reductions ~game-fn @~outer-atom ~'inputs)))
     (def ~'app-atom 
       ('amesmacaulay.zelkova.signal/pipe-to-atom ~'app-signal ~outer-atom))
     (defn ~game-name [] 
       (let [~'data @~'app-atom]
         (~view-fn ~'data ~'button-chan)))
     (defn ~'init []
       (reagent/render-component
         (~game-name)
         (.getElementById js/document "app")))
     (~'init))) 
