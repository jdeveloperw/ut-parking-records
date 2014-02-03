# TODO switch to litcoffee when Grunt 0.5.0 is released

module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-shell'

  grunt.initConfig
    shell:
      server:
        options:
          stdout: true
          stderr: true
        command: './ui/scripts/web-server.js'
      tests:
        options:
          stdout: true
          stderr: true
        command: './ui/scripts/test.sh'
      brew:
        options:
          stdout: true
          stderr: true
        command: './ui/scripts/compile-coffee.sh'
      ui:
        options:
          stdout: true
          stderr: true
        command: [
          './ui/scripts/web-server.js'
          './ui/scripts/test.sh'
          './ui/scripts/compile-coffee.sh'
        ].join '&'
           

  grunt.registerTask 'server', 'Start node.js server', ['shell:server']
  grunt.registerTask 'tests', 'Start jasmine/karma test runner', ['shell:tests']
  grunt.registerTask 'brew', 'Start coffee to javascript compiler', ['shell:brew']
  grunt.registerTask 'ui', 'Start server, tests, and brew', ['shell:ui']
