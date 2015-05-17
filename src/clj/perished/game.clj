(ns perished.game)
 
(defmacro defgame [game-name init-state signal-fn view-fn]
  `(do 
     (def ~'button-chan 
       (cljs.core.async/chan))
     (def ~'button-signal 
       (jamesmacaulay.zelkova.signal/input nil ::button ~'button-chan))
     (def ~'state-signal  
       (jamesmacaulay.zelkova.signal/input ~init-state))
     (def ~'app-signal (~signal-fn ~'state-signal ~'button-signal))
     (def ~'app-atom 
       (jamesmacaulay.zelkova.signal/pipe-to-atom ~'app-signal))
     (defn ~game-name [] 
       (let [~'data @~'app-atom]
         (~view-fn ~'data ~'button-chan)))
     (defn ~'init []
       (reagent/render-component
         (~game-name)
         (.getElementById js/document "container"))))) 
