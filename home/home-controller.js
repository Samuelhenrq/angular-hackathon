angular.module("app").controller("HomeController", HomeController);
HomeController.$inject = ["$location", "CursoService"];

    function HomeController($location, CursoService){
        vm = this;
        vm.texto = "Home";
        vm.clientes = ""

        vm.init = ()=>{
            vm.listarClientes()
        }

        vm.navegar = ()=>{
            $location.path("cadastro")
        }

        vm.listarClientes = ()=>{
            CursoService.exec_GET().then((resposta)=>{
                if(resposta){
                    vm.clientes =resposta
                }
            })
        }
    }