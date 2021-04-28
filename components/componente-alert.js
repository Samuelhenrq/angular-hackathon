angular.module("app").component("alertParaUsuario",{
    templateUrl:"components/alert.html",
    bindings:{     //bindings são variaveis que podemos transisionar de uma tela pra outra
        msg: "=",     // = representa nosso two way data binding  (tanto a tela ou a controller pode enviar informação) 
        tipo: "="
    },
    controllerAs: "vm",
    controller: function(){
        vm = this;
        vm.tipoClasse = undefined
            //$onInit  :  Quando a tela é iniciada faça tua função
        vm.$onInit = ()=>{
            if(vm.tipo == "sucesso"){
                vm.tipoClasse = "alert alert-success"
            }else if(vm.tipo == "erro"){
                vm.tipoClasse = "alert alert-danger"
            }
        }
        
    }
});