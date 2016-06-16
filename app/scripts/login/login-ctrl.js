'use strict';

angular.module('eventoZukuri', ['firebase'])
    .controller('LoginCtrl', ['$scope', '$firebaseAuth', function ($scope, $firebase) {
        var ref = new Firebase('https://eventozukuri.firebaseio.com/');
        var auth = $firebaseAuth(ref);

    }
]);
