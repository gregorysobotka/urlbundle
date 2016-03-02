function module(name){
    this.config = {
        name : name,
        moduleId : '#'+name
    };
    this.subModules = [];
    this.subModulePaths = [];
}

$.extend(module.prototype,{

    extendConfig : function(config){
        $.extend(this.config, config);
    },

    registerSubModules : function(modules){
        if(typeof modules !== 'undefined') {
            for (var i = 0; i < modules.length; i++) {
                this.subModulePaths.push(modules[i]);
            }
        }
    },

    loadSubModules : function(){
        var subModules = this.subModulePaths;
        var self = this;
        for(var i =0; i<subModules.length; i++) {
            require([subModules[i]],function(currentModule){
                currentModule.config.parent = self;
                self.subModules.push(currentModule);
                currentModule.init();
            });
        }
    }

});
