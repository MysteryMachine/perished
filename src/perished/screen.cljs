(ns perished.screen
  (:require [cljs.core.async :as async
             :refer [put!]]))

(defn view-dispatch [state _] (:game-state state))
(defmulti  view view-dispatch)
(defmethod view :default [state _] [:div (str state)]) 
