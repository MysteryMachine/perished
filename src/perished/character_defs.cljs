(ns perished.character-defs
  (:require [perished.character :as c
             :refer [Class SkillSet CharDef]]
            [perished.character-defs.lithographer :refer [lithographer]]))

(def classes 
  [lithographer])

(defn random-char-def [] (CharDef. lithographer lithographer))

