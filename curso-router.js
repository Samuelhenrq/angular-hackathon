angular.module("app").config(function($routeProvider){
    $routeProvider          // ? diz que a rota é opcional
        .when("/Cadastro/:idCli?", {
            templateUrl: "cadastro/cadastro.html",
            controller: "CadastroController as vm"
        })
        .otherwise({
            templateUrl: "home/home.html",
            controller: "HomeController as vm"
        })
})