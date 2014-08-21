/*
this is a index app module
*/

var index_app = angular.module('index_app',[]);

index_app.controller('index_controller',['$scope',
	function($scope){
		//to define some URLs
		$scope.about_modal_url = 'modules/index/about-modal.mo' ;
		$scope.login_form_url = 'modules/shared/login-form.mo' ;
		$scope.reg_url = 'modules/index/reg.mo' ;
		$scope.show_carousel_url = 'modules/index/show-carousel.mo'	;
		$scope.pic_world_url = 'images/world.jpg' ;
		$scope.pic_lp_url = 'images/lp.jpg' ;
	}
]);