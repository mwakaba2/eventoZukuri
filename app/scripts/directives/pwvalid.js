'use strict';

angular
  .module('eventoZukuri')
  .directive('pwValid', function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {
			elem.on('keyup', function () {
				scope.$apply(function () {
					var regExpString = new RegExp('((?=.*\\d)(?=.*[A-Z])(?=.*\\W).{8,})');
					var v = regExpString.test(elem.val());
					ctrl.$setValidity('pwinvalid', v);
				});
			});
		}
	};
});
