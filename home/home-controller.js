angular.module("app").controller("HomeController", HomeController);
HomeController.$inject = ["$location", "CursoService"];

    function HomeController($location, CursoService){
        vm = this;
        vm.texto = "Home";
        vm.clientes = ""

        vm.init = ()=>{
            vm.listarClientes()
        }

        vm.navegar = (navegar, id)=>{
            $location.path(navegar + "/" + id)
        }

        vm.listarClientes = ()=>{
            CursoService.exec_GET().then((resposta)=>{
                if(resposta){
                    vm.clientes =resposta
                }
            })
        }
        vm.deletar = (id)=>{
            CursoService.exec_DELETE(id).then((resposta)=>{
                if(resposta){
                    //vm.clientes =resposta
                }
            })
        }
        vm.editar = (id)=>{
            vm.navegar("Cadastro", id)
            
        }       
    }