var userInfoModule=angular.module('userInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
	$scope.userInfo={
		email:'596713230@qq.com',
		password:'54899933',
		autoLogin:true
	};
	$scope.getFormData=function(){
		console.log($scope.userInfo)
	};
	$scope.setFormData=function(){
		$scope.userInfo={
			email:'570434042@qq.com',
			password:'mc54899933',
			autoLogin:false
		}
	};
	$scope.resetFormData=function(){
		$scope.userInfo={
			email:'596713230@qq.com',
			password:'54899933',
			autoLogin:true
		}
	}

}])
