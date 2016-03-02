function subModule(name){
    this.config = {
        name : name,
        configId : '#'+name,
        parent : {}
    };
}

$.extend(subModule.prototype,{
    extendConfig : function(config){
        $.extend(this.config, config);
    }
});