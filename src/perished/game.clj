(ns perished.game)
 
(defmacro defgame [game-name outer-atom game-fn view-fn]
  `(let [~'button-chan (cljs.core.async/chan)
         ~'app-signal 
         (let [~'time-deltas (jamesmacaulay.zelkova.time/fps 30)
                ~'inputs (->> 
                          (jamesmacaulay.zelkova.signal/map 
                           vector
                           (jamesmacaulay.zelkova.signal/input nil ::button ~'button-chan)
                           ~'time-deltas)
                          (jamesmacaulay.zelkova.signal/sample-on ~'time-deltas))]
           (jamesmacaulay.zelkova.signal/reductions ~game-fn @~outer-atom ~'inputs))
         ~'app-atom ('jamesmacaulay.zelkova.signal/pipe-to-atom ~'app-signal ~outer-atom)
         ~'render (fn [] 
                    (let [~'data @~'app-atom]
                      (~view-fn ~'data ~'button-chan)))]
     (defn ~game-name []
       (reagent.core/render-component
         [~'render]
         (.getElementById js/document "app")))
     (~game-name)))  
