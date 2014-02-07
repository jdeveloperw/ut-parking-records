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
Get our AngularJS app running on your local machine.
This is a work in progress.

### Install grunt

We're using [GruntJS](http://gruntjs.com/), a task runner written in javascript,
to do all of our -- ahem -- grunt work.
Grunt has a command-line interface; here's how to set it up:

- [Install node.js.](http://nodejs.org/download/)
- Install grunt-cli globally.

        npm install -g grunt-cli
        
- Install node modules for grunt (this installs all of the modules in package.json):

        npm install
        
That was easy!

### Install packages we depend on

Now that we have grunt installed,
we can install all of the dependencies that our project needs.
This command `cd`'s to all subdirectories containing `package.json`
and runs `npm install` in each directory.
Simple, but beats typing it in yourself.

    grunt install
        
### Start the servers
Start the webserver, karma testrunner, and coffeescript compiler:

- Start the webserver

        grunt server
        
    and visit http://localhost/ui/app/index.html.
    
- Start the karma testrunner

        grunt tests
        
    and anytime you edit a `.*coffee` file in `ui/app/coffee`,
    all of the unit tests will automatically be run.
    How's that for Test-Driven Development?
        
- Start the coffeescript compiler

        grunt brew
        
    and anytime you edit a `.*coffee` file in `ui/app/coffee`,
    it will automatically be compiled to javascript.
    Just refresh the http://localhost/ui/app/index.html to see your changes.
        
Or run all three in the same shell with one command:

    grunt ui
        
## More grunt tasks
To see all that grunt can do, run `grunt -h`.
Here are a few grunt tasks that may be useful: