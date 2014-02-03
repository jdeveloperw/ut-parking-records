greg_project
============

Greg's Access DB project. To infinity, and beyond!

<pre>
greg_project
├── .gitignore
|   Files git should ignore
├── Gruntfile.coffee
|   Configuration for grunt command line utility
├── README.md
|   This file
├── ansible
|   Scripts for deploying staging/production servers
|   (and managing developer workspaces, coming soon)
├── api
|   Files for the API
├── database
|   Schema for the database
├── node_modules
|   Locally installed node modules
├── original_files
|   Original Microsoft Access Database
├── package.json
|   Package description; includes dependency list
├── scripts
|   Scripts (these will be moved into Gruntfile.coffee)
└── ui
    AngularJS Single-Page Application front-end
</pre>

## Getting Started
This is a work in progress.

- [Install node.js.](http://nodejs.org/download/)
- Install grunt-cli globally.

        npm install -g grunt-cli

- Install node modules (this installs all of the modules in package.json):

        npm install

- Installs submodule npm packages.

        grunt install

- Start the webserver, karma testrunner, and coffeescript compiler.

        grunt ui
