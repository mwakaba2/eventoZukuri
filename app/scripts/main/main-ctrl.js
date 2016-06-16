/* global Firebase */

'use strict';

angular.module('eventoZukuri')
  .controller('MainCtrl', function ($scope, $firebase) {
  	// now we can use $firebase to synchronize data between clients and the server!
    var ref = new Firebase('https://eventozukuri.firebaseio.com/');


  });
