module.exports=function(t){"use strict";var i=t.file.readJSON(".jshintrc");i.reporter=require("jshint-stylish"),t.initConfig({jshint:{options:i,target:["Gruntfile.js","viewport-units-buggyfill.js"]}}),t.loadNpmTasks("grunt-contrib-jshint"),t.registerTask("lint","jshint")};