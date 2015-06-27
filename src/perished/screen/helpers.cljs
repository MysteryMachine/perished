(ns perished.screen.helpers)

(def gentry ["Dana" "Sage" "Sam" "Addison"])

(def standard-res {:w 1920 :h 1080})
(defn convert-height [width] (* (/ (:h standard-res) (:w standard-res))
                                width))

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

(defn affix-fn [unscaled-screen-w]
  (let [screen-w (if (> unscaled-screen-w (:w standard-res))
                   (:w standard-res)
                   unscaled-screen-w)
        scale (/ screen-w (:w standard-res))
        screen-h (* (:h standard-res) scale)] 
    (fn [style affix-loc x y]
      (let [[xl yl :as align] (affix-loc affix-locs)
            x-fix (calc-affix xl screen-w x)
            y-fix (calc-affix yl screen-h y)
            transform (get transforms align)]
        (merge style {:left x-fix 
                      :top y-fix 
                      :transform transform
                      :display "inline-block"
                      :position "absolute"})))))
