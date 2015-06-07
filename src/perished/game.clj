(ns perished.game)
 
(defmacro defgame [game-name app-atom game-fn view-fn]
  `(let [button-chan# (cljs.core.async/chan)
         app-signal# 
         (let [time-deltas# (jamesmacaulay.zelkova.time/fps 30)
               inputs# (->> 
                        (jamesmacaulay.zelkova.signal/map 
                          vector
                          (jamesmacaulay.zelkova.signal/input identity 
                                                              ::button 
                                                              button-chan#)
                          time-deltas#
                          jamesmacaulay.zelkova.window/dimensions)
                        (jamesmacaulay.zelkova.signal/sample-on time-deltas#))]
           (jamesmacaulay.zelkova.signal/reductions ~game-fn @~app-atom inputs#))]
     (jamesmacaulay.zelkova.signal/pipe-to-atom app-signal# ~app-atom)
     (defn ~game-name []
       (reagent.core/render-component
        [#(~view-fn @~app-atom button-chan#)]
        (.getElementById js/document "app"))) 
     (~game-name)))  
