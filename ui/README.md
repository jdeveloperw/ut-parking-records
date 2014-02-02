This AngularJS project was cloned from [angular-seed](https://github.com/angular/angular-seed)

# Getting Started Developing

To develop for this AngularJS app, you will need to run 3 things:

- A node.js server to serve the js, css, and html
- Coffee, which compiles the coffeescript source files into javascript
- Karma, which executes unit tests continuously, re-running tests any time you change a file

## Setup

- [Install node.js and npm.](http://nodejs.org/download/).
  Node.js is to javascript what Django is to python,
  and npm is to javascript what pip/easy_install is to python.
- Install libraries through npm.
  (There are probably some libraries I've missed here;
  if you find them please add them to this doc).

      npm install karma coffee-script

## Running the node.js server

    scripts/web-server.js

## Running the coffeescript compiler

    scripts/compile-coffee.sh

## Running jasmine/karma unit tests

    scripts/test.sh
