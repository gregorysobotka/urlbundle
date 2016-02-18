define(['jquery'],function() {

    var random = random || new subModule('randomGenerator');

    random.extendConfig({
        clickClass : '.generate-random'
    });

    random.generateNumber = function(){
        return Math.random().toString(36).substr(5, 8);
    };

    random.updateDom = function(targetId){
        $(targetId).val(this.generateNumber());
    };

    random.spyDom = function(){
        var self = this;
        $(self.config.clickClass).click(function(){
            self.updateDom($(this).data('target'));
        });
    };

    random.init = function(){
        this.spyDom();
    };

    return random;

});