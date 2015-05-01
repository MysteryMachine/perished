(ns ^:figwheel-always perished.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)

;; (println "Edits to this text should show up in your developer console.")

(def app-state (atom {:text "MAGIC DEVELOPMENT MAGIC!!!"}))

(om/root
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:text data)))))
  app-state
  {:target (. js/document (getElementById "app"))})


