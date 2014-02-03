# TODO switch to litcoffee when Grunt 0.5.0 is released
# TODO switch to docopt if possible
"""
For usage, run grunt -h
"""

module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-shell'

  # Options common to all grunt-shell commands
  shell_options =
    stdout: true
    stderr: true

  grunt.initConfig
    # Commands to be executed on the command line
    shell:
      server:
        options: shell_options 
        command: './ui/scripts/web-server.js'
      tests:
        options: shell_options 
        command: './ui/scripts/test.sh'
      brew:
        options: shell_options 
        command: './ui/scripts/compile-coffee.sh'
      ui:
        options: shell_options 
        command: [
          './ui/scripts/web-server.js'
          './ui/scripts/test.sh'
          './ui/scripts/compile-coffee.sh'
        ].join '&'
      tree:
        options: shell_options 
        command: 'tree -a -L 1 -F --charset ASCII'
      # TODO better way to do this
      install:
        options: shell_options 
        command: 'npm install ; cd ui/ ; npm install ; cd ..'
           
  grunt.registerTask 'server', 'Start node.js server', ['shell:server']
  grunt.registerTask 'tests', 'Start jasmine/karma test runner', ['shell:tests']
  grunt.registerTask 'brew', 'Start coffee to javascript compiler', ['shell:brew']
  grunt.registerTask 'ui', 'Start server, tests, and brew', ['shell:ui']
  grunt.registerTask 'tree', 'Print file tree', ['shell:tree']
  grunt.registerTask 'install', 'Run npm install for all folders', ['shell:install']
