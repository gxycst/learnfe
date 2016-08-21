var bookStoreCtrls=angular.module('bookStoreCtrls',[]);
bookStoreCtrls.controller('HelloCtrl',['$scope',function($scope){
	$scope.greeting={
		text:'Hello'
	}
}]);
bookStoreCtrls.controller('BookListCtrl',['$scope',function($scope){
	$scope.books=[
	{title:"《Ext江湖》",author:"大漠"},
	{title:"《丑陋的中国人》",author:"龙应台"},
	{title:"《他的国》",author:"韩寒"}
	]
}])