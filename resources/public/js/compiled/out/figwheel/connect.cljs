(ns figwheel.connect (:require [figwheel.client] [perished.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload perished.core/on-js-reload, :build-id "dev"})

