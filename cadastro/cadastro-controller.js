angular.module("app").controller("CadastroController", CadastroController);
CadastroController.$inject = ["$location"];

    function CadastroController($location){
        vm = this;
        vm.teste = "Cadastro"

        vm.navegar = function(){
            $location.path("/")
        }
    }