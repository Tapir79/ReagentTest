(defproject helloworld "0.1.0-SNAPSHOT"
  :description "Testing Reagent"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :main helloworld.core

  :cljsbuild {:builds [{
                        ;development
                        :id "dev"
                        ;where in my project should I look clojurescript files
                        :source-paths ["src"]

                        ;:figwheel true
                        :compiler

                        {
                         ;uses google closure compiler to optimize the javascript code
                         ; optimizations : advanced ;makes the code as optimized as possible
                         :optimizations :none
                         :output-to "resources/public/javascripts/dev.js"
                         :output-dir "resources/public/javascripts/cljs-dev/"
                         :pretty-print true
                         :source-map true }}]}

  :plugins [[lein-cljsbuild "1.0.6"]
            ;[lein-figwheel "0.3.7"]
            ]

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [reagent "0.5.0"]])
