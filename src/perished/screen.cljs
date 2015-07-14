(ns perished.screen
  (:require [cljs.core.async :as async
             :refer [put!]]))
(def standard-resolution [1920 1080])
(defn convert-height [width] (* (/ 1920 1080) width))

(defn view-dispatch [data _] (:game-state data))
(defmulti  view view-dispatch)
(defmethod view :default [data _] [:div (str data)]) 
