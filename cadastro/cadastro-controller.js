angular.module("app").controller("CadastroController", CadastroController);
CadastroController.$inject = ["$location", "CursoService"];

    function CadastroController($location, CursoService){
        vm = this;
        vm.texto = "Cadastro"
        vm.cliente = {}

        vm.navegar = (navegar)=>{
            $location.path(navegar)
        }

        vm.cadastrar = function(){
            CursoService.exec_POST(vm.cliente).then(function(resposta){
                if(resposta){
                    vm.clientes = resposta
                }
            })
            vm.navegar("/")
        }
        vm.limpar = function(){
            vm.cliente = {}
        }
    }