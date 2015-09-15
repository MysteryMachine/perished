(ns perished.cutscene
  (:use arcadia.core)
  (:import [UnityEngine
            Application
            GameObject
            PlayerPrefs
            Debug]))

(defcomponent CutsceneController [^String name]
  (Start [this] (set! name (PlayerPrefs/GetString "Cutscene"))))
