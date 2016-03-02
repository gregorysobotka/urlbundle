define(['jquery'],function() {

    var publicMethods = publicMethods || new subModule('randomGenerator');

    publicMethods.extendConfig({
        clickClass : '.generate-random',
        generatedNumber : 0
    });

    publicMethods.generateNumber = function(){
        return Math.random().toString(36).substr(5, 8);
    };

    publicMethods.updateDom = function(targetId, randomNumber){
        $(targetId).val(randomNumber);
    };

    publicMethods.spyDom = function(){
        var self = this;
        $(self.config.clickClass).click(function(){
            var randomNumber = self.generateNumber();
            self.config.parent.isBundleAvailable(randomNumber);
            self.updateDom($(this).data('target'), randomNumber);
        });
    };

    publicMethods.init = function(parent){
        this.spyDom();
    };

    return publicMethods;

});