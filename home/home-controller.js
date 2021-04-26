angular.module("app").controller("HomeController", HomeController);
HomeController.$inject = ["$location"];

    function HomeController($location){
        vm = this;
        vm.teste = "Home";

        vm.navegar = function(){
            $location.path("cadastro")
        }
    }