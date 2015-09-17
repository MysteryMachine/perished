(ns perished.title-screen
  (:use arcadia.core
        perished.scenes
        perished.character)
  (:import [UnityEngine
            Application
            PlayerPrefs]))

(defn- new-game [] 
  (PlayerPrefs/SetString "Scene" "new-game")
  (PlayerPrefs/SetString "Party" (str (random-party)))
  (Application/LoadLevel (get-scene :new-game)))
(defn- exit [] (Application/Quit))

(defcomponent TriggerNewGame [] (OnEnable [this] (new-game)))
(defcomponent TriggerExit [] (OnEnable [this] (exit)))
