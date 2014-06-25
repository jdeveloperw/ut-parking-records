# Overview

This is the AngularJS UI for interacting with Parking Records
and generating aggregate reports.

<pre>
ut-parking-records/ui/
├── README.md
|   This file
├── app
|   All of the source and compiled coffeescript, js, css, and html
├── config
|   Configuration for node.js and karma servers
├── logs
├── package.json
|   Node.js package description
├── scripts
|   Scripts for running the server and executing unit tests
└── test
    Contains all of the tests/specs
</pre>

(file tree generated with `tree -F -L 1`)

# Getting Started Developing

To develop for this AngularJS app, you will need to run 3 things:

- A node.js server to serve the js, css, and html
- Coffee, which compiles the coffeescript source files into javascript
- Karma, which executes unit tests continuously, re-running tests any time you change a file

To see how to set these up, please see the top-level README for this project.

## I was hacking away, and I added a new node dependency.

Sweet!  Make sure it is in package.json:

    node install $MYPACKAGE --save-dev
    git commit package.json -m "Added new and awesome $MYPACKAGE"
