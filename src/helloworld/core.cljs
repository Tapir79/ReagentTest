(ns helloworld.core
  (:require [reagent.core :as reagent]
            [helloworld.title :as title]))

(def app-state
  (reagent/atom
    {:message "My message"
     :items [{:display "Item 1"}
             {:display "Item 2"}
             {:display "Item 3"}
             ]}))

(defn items-list [items]
  [:div {:class "items-list"}
   (for [item items]
     [:div {:class "item"}
      [:p (:display item)]])])


    ; write html as an array
    ; 1st argument is the tag-name <h1></h1>
    ; 2nd argument is the key-value pair of all the attributes that are on that tag
    ; 3rd argument is the inner of that tag
(defn app []
   [:div {:class (if (= 3 3) "container" "empty")}
    [title/header (:message @app-state)]
    [items-list (:items @app-state)]
    ])

    ; exactly like React
    (reagent/render [app] (js/document.querySelector "#cljs-target"))

(js/setTimeout
  (fn [] (swap! app-state assoc-in [:message] "Other message..."))2000)