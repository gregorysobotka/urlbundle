define(function(){

    var publicMethods = publicMethods || {};

    publicMethods.assignRandomBackground = function(){

        var randomNumber = function(){
            var max = 4, min = 1;
            return Math.floor(Math.random()*(max-min+1)+min);
        }();

        $('#home .main-screen').addClass('bg'+randomNumber);

    };

    publicMethods.init = function(){

        this.assignRandomBackground();

    };

    return publicMethods;

});