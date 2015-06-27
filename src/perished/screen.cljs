(ns perished.screen
  (:require [cljs.core.async :as async
             :refer [put!]]))

(defn convert-height [width] (* c/aspect-ratio screen))

(defn view-dispatch [data _] (:game-state data))
(defmulti  view view-dispatch)
(defmethod view :default [data _] [:div (str data)]) 
