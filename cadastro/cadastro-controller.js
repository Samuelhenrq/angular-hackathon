angular.module("app").controller("CadastroController", CadastroController);
CadastroController.$inject = ["$location", "CursoService", "$routeParams"];

    function CadastroController($location, CursoService, $routeParams){
        vm = this;
        vm.texto = "Cadastro"
        vm.cliente = {}
        vm.idCli = undefined
        vm.textoBotao = "Cadastrar"

        vm.navegar = (navegar)=>{
            $location.path(navegar)
        }

        vm.cadastrar = ()=>{
            if(vm.textoBotao == "Cadastrar"){
                CursoService.exec_POST(vm.cliente).then((resposta)=>{
                    if(resposta){
                        vm.clientes = resposta
                    }
                })
            }else if(vm.textoBotao == "Atualizar"){
                CursoService.exec_PUT(vm.cliente).then((resposta)=>{
                    if(resposta){
                        vm.clientes = resposta
                    }
                })
            } 

            vm.navegar("/")
        }
        vm.limpar = ()=>{
            vm.cliente = {}
        }

        if($routeParams.idCli){
            vm.idCli = $routeParams.idCli
            buscarID(vm.idCli)
            vm.textoBotao = "Atualizar"
        }

        function buscarID(id){
            CursoService.exec_GET_ID(id).then((resposta)=>{
                if(resposta){
                    vm.cliente = resposta
                }
            })
        }

        vm.limpar = ()=>{
            vm.cliente = {}
        }
    }