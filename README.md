# helloworld

A Clojure library designed to ... well, that part is up to you.

## Usage

FIXME

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

****

Downloading dependencies

'lein deps'

****

If I wanna build a javascript file out of this

'lein cljsbuild once dev'

cljsbuild = (in project.clj :cljsbuild {...})

dev =  :cljsbuild {:builds [{
development :id "dev"

once = do it one time

****

index.html

we need to tell where the goog a.k.a google closure compiler is (in project.clj the output-dir)
the namespace wher  we wnt to run the app

*****
1.7 release
*.cljc extension in any file makes it clojurescript readable

Clojure switch or case statement (!!!! NOTE core.cljc )
#?

****

HTTPServer

'python -m SimpleHTTPServer 8080'

****
OM, Quiescent [quiessent] and Reagent (ReactJS libraries for Clojure) VS:
- OM has most features but it is very advanced and difficult to use
- Quiescent is good for lightweight stuff
- Reagent is something in between and has enough features to do advanced
stuff but it's not too difficult to use. Like React+, a better way to write React
****

Reagent
- framework on top of Reagent called Re-Frame
- uses Hiccup-like markup instead of React's 'sort of html'
- you write all components using just functions (the big idea)

****
Reagent/Atom

- A Clojure function that makes a mutable wrapper around an immutable function
- An immutable container - how you handle state etc.

