(ns perished.title-screen
  (:use arcadia.core
        perished.scenes)
  (:import [UnityEngine
            Application
            MonoBehaviour
            GameObject
            Debug]))

(gen-class 
 :name  TitleScreen
 :extends UnityEngine.MonoBehaviour
 :methods [[newGame [] void]
           [loadGame [] void]
           [options [] void] 
           [exit [] void]])

(defn- -newGame [this] (cutscene "New Game"))
(defn- -loadGame [this] nil)
(defn- -options [this] nil)
(defn- -exit [this] (Application/Quit))
