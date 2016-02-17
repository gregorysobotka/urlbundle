define(function(){

    var publicMethods = publicMethods || new module();

    publicMethods.config = {

    };

    publicMethods.init = function(){

        this.loadSubModules();

    };

    return publicMethods;

});