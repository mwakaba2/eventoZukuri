'use strict';

angular
  .module('eventoZukuri')
  .directive('validDate', function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {
			elem.on('keyup', function () {
				scope.$apply(function () {
					var v;
					if(attrs.validDate) {
						v = scope.startTime.getTime() > Date.now() && scope.startTime.getTime() < scope.endTime.getTime();
					} else {
						v = scope.startTime.getTime() > Date.now();
					}
					ctrl.$setValidity('datevalid', v);
				});
			});
		}
	};
});
