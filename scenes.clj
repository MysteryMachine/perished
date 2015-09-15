(ns perished.scenes
  (:use arcadia.core)
  (:import [UnityEngine
            Application
            GameObject 
            PlayerPrefs
            Debug]))

(def ^System.Int64 start-menu-num 0)
(def ^System.Int64 cutscene-num 1)

(defn cutscene [^String name]
  (PlayerPrefs/SetString "Cutscene" name)
  (Application/LoadLevel cutscene-num))
