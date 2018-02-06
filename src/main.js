requirejs.config({
    baseUrl: "app",
    paths: {
      'text': '../node_modules/requirejs-text/text',
      'durandal':'../node_modules/durandal/js',
      'plugins' : '../node_modules/durandal/js/plugins',
      'transitions' : '../node_modules/durandal/js/transitions',
      'knockout': '../node_modules/knockout/build/output/knockout-latest.debug',
      'jquery': '../node_modules/jquery/dist/jquery'
      } 
  });
   
  define(function (require) {
     var system = require('durandal/system'),
         app = require('durandal/app');
   
     system.debug(true);
   
     app.title = 'Durandal Starter Kit';
   
     app.configurePlugins({
       router:true,
       dialog: true
     });
   
     app.start().then(function() {
       app.setRoot('shell');
     });
  });