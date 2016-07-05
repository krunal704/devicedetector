angular.module("ddApp",["ng.deviceDetector"])
		.controller("ddController",['deviceDetector', function (deviceDetector) {
			var vm = this;
			vm.data = deviceDetector;
			vm.allData = JSON.stringify(vm.data, null, 2);
			var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		 	var height = (window.innerHeight >0)  ? window.innerHeight : screen.height;
			vm.width = width;
			vm.height = height;
			

		}]);