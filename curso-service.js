angular.module("app").factory("CursoService", CursoService);
CursoService.$inject = ["$http"];
    function CursoService($http){
        var service = { // ou seja a service é a porta de saida e entrada pro nosso projeto pra consultar APIs rest
            exec_GET: ()=>{                                       //função de callback
                return $http.get("http://localhost:3000/Clientes").then(tratarResposta, tratarErro);
            }
        
        }
        function tratarResposta(response){
            return response.data;
        }
        function tratarErro(error){
            return error.data;
        }
        return service;
    }