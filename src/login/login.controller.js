(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.emailId, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.emailId, vm.password);
                    $location.path('/');
                    //Set this time to LocalStorage to persist for 72hours after make him logout
                    //var currentTime = new Date(new Date().getTime() + 60 * 60 * 72 * 1000);
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
