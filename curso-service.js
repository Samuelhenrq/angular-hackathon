angular.module("app").factory("CursoService", CursoService);
CursoService.$inject = ["$http"];
    function CursoService($http){

        const REST = "http://localhost:3000/Clientes"

        var service = { // ou seja a service é a porta de saida e entrada pro nosso projeto pra consultar APIs rest
            exec_GET: ()=>{                                       //função de callback
                return $http.get(REST).then(tratarResposta, tratarErro);
            },
            exec_POST: (cliente)=>{
                return $http.post(REST, cliente).then(tratarResposta, tratarErro);
            },
            exec_DELETE: (id)=>{
                return $http.delete(REST + '/' + id).then(tratarResposta, tratarErro);
            },
            exec_GET_ID: (id)=>{
                return $http.get(REST+ "/" + id).then(tratarResposta, tratarErro);
            },
            exec_PUT: (cliente)=>{
                return $http.put(REST+ "/" + cliente.id, cliente).then(tratarResposta, tratarErro);
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