define(function(){

    var publicMethods = publicMethods || new subModule('randomBackground');

    publicMethods.assignRandomBackground = function(){
        $('#home .main-screen').addClass(this.createRandomBgClass());
    };

    publicMethods.createRandomBgClass = function(){
        var max = 6, min = 1;
        return 'bg'+Math.floor(Math.random()*(max-min+1)+min);
    };

    publicMethods.init = function(){
        this.assignRandomBackground();
    };

    return publicMethods;

});