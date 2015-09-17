(ns perished.title-screen
  (:use arcadia.core
        perished.scenes)
  (:import [UnityEngine
            Application
            PlayerPrefs]))

(gen-class 
 :name  TitleScreen
 :extends UnityEngine.MonoBehaviour
 :methods [[NewGame [] void]
           [LoadGame [] void]
           [Options [] void] 
           [Exit [] void]])

(defn- -NewGame [this] 
  (PlayerPrefs/SetString "Scene" "new-game")
  (Application/LoadLevel (:new-game scenes)))
(defn- -LoadGame [this] nil)
(defn- -Options [this] nil)
(defn- -Exit [this] (Application/Quit)) 
