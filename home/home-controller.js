angular.module("app").controller("HomeController", HomeController);
HomeController.$inject = ["$location", "CursoService"];

    function HomeController($location, CursoService){
        vm = this;
        vm.texto = "Home";
        vm.clientes = ""

        vm.navegar = ()=>{
            $location.path("cadastro")
        }

        vm.listarClientes = ()=>{
            CursoService.exec_GET().then((resposta)=>{
                if(resposta){
                    console.log(resposta)
                }
            })
        }
    }