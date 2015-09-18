(ns perished.title-screen
  (:use arcadia.core
        perished.scenes
        perished.character)
  (:import [UnityEngine
            Application
            PlayerPrefs
            Debug]))

(defprotocol StartMenuEvents
  (NewGame [this])
  (Exit [this]))

(defcomponent StartMenu []
  StartMenuEvents
  (NewGame [this] 
    (PlayerPrefs/SetString "Scene" "new-game")
    (PlayerPrefs/SetString "Party" (str (random-party)))
    (Application/LoadLevel (get-scene :new-game)))
  (Exit [this] (Application/Quit)))
