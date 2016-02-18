define(function(){

    var publicMethods = publicMethods || new module('homePage');

    publicMethods.init = function(){

        this.loadSubModules();

    };

    return publicMethods;

});