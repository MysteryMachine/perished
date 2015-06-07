(ns perished.screen.battle
  (:require [cljs.core.async :as async
             :refer [put!]]
            [perished.screen]))

(defmethod perished.screen.view :battle [data bchan]
  [:div (str (-> data :page-state :screen-size))])
