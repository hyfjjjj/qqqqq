//the controller for login 
var login_app = angular.module('login_app',[]);

login.factory('login_service_id',function($scope,$http,$q,$window){
	$scope.user_info = "sb";

});

function login_controller($scope){
	$scope.user_name = '';
	$scope.password = '';
	$scope.input_style = 'input-group';
	$scope.span_style = 'hidden';
	$scope.forget_password_url = '/public/index.html';
	$scope.information = null;

	var password_pattern = /^\w{6,10}$/;
	var user_name_pattern = /^\w{4,20}$/;
	var input_normal = 'input-group';
	var input_correct = 'input-group has-success has-feedback';
	var input_wrong = 'input-group has-error has-feedback';
	var span_correct = 'glyphicon glyphicon-ok form-control-feedback';
	var span_wrong = 'glyphicon glyphicon-remove form-control-feedback';
	var span_hidden = 'hidden';

	var reset_info = function(){
		if($scope.information != null){
			$scope.information = null;
		}		
	}

	//called when name changes
	$scope.on_name_change = function(){
		reset_info();
		if($scope.user_name==null){
			$scope.span_style = span_hidden;
			$scope.input_style = input_normal;
			return ;
		}
		if(user_name_pattern.test($scope.user_name)){
			$scope.input_style = input_correct;
			$scope.span_style = span_correct;
		} else {
			$scope.input_style = input_wrong;
			$scope.span_style = span_wrong;
		}
	}

	//called when password changes
	$scope.on_password_change = function(){
		reset_info();
	}

	var is_name_legal = function(){
		if(user_name_pattern.test($scope.user_name)){
			return true;
		}else {
			return false;
		}
	}

	var is_password_legal = function(){
		if(user_name_pattern.test($scope.password)){
			return true;
		}else {
			return false;
		}
	}

	$scope.on_login = function($http){
		if(is_password_legal() && is_name_legal()){
			//do something 
		}else{
			$scope.information = '用户名或密码格式错误';
		}
	}
}