function subModule(name){
    this.config = {
        name : name,
        configId : '#'+name
    };
}

$.extend(subModule.prototype,{
    extendConfig : function(config){
        $.extend(this.config, config);
    }
});