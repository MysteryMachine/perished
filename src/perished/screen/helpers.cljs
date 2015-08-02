(ns perished.screen.helpers)

(def gentry ["Dana" "Sage" "Sam" "Addison"])

(def s-res {:w 1920 :h 1080})
(def s-scale (/ (:w s-res) (:h s-res)))

(def affix-locs {:top-left [1 1]
                 :top [0 1] 
                 :top-right [-1 1]
                 :left [1 0]
                 :center [0 0]
                 :right [-1 0]
                 :bottom-left [1 -1]
                 :bottom [0 -1]
                 :bottom-right [-1 -1]})

(def transforms 
  (let [r (range -1 2)
        trns (fn [n] (* -50 (+ 1 (* -1 n))))
        vecs (for [i r j r]
               [[i j] (str "translate(" (trns i) "%, " (trns j) "%)")])]
    (reduce (fn [m [k v]]
              (assoc m k v))
            {}
            vecs)))

(defmulti calc-affix (fn [n & _] n))
(defmethod calc-affix -1 [_ max val] (- max (* max val)))
(defmethod calc-affix 0 [_ max val] (+ (* max val) (/ max 2)))
(defmethod calc-affix 1 [_ max val] (* max val)) 

(defn affixer [style state affix-loc x y]
  (let [screen-h (:window-height state)
        screen-w (:window-width state)
        [xl yl :as align] (affix-loc affix-locs)
        x-fix (+ (:margin-width state) (calc-affix xl screen-w x))
        y-fix (+ (:margin-height state) (calc-affix yl screen-h y))
        transform (get transforms align)]
    (merge style {:left x-fix 
                  :top y-fix 
                  :transform transform
                  :display "inline-block"
                  :position "absolute"})))

(defn scale [state [w h]]
  (let [[w w-extra] (if (> w (:w s-res)) 
                      [(:w s-res) (- (w (:w s-res)))] 
                      [w 0])
        [h h-extra] (if (> h (:h s-res)) 
                      [(:h s-res) (- (h (:h s-res)))] 
                      [h 0])
        s (/ w h)
        scale-w? (> s s-scale)
        [w w-extra] (if scale-w?
                      (let [new-w (* h s-scale)]
                        [new-w (+ w-extra (- w new-w))])
                      [w w-extra])
        [h h-extra] (if-not scale-w?
                      (let [new-h (/ w s-scale)]
                        [new-h (+ h-extra (- h new-h))])
                      [h h-extra])]
    (-> state
        (assoc :window-height h)
        (assoc :window-width w)
        (assoc :margin-width (/ w-extra 4))
        (assoc :margin-height (/ h-extra 4)))))

(defn ? [q] (if q "true" "false"))
