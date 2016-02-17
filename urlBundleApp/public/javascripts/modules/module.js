function module(){
    this.subModules = [];
}

module.prototype.registerSubModules = function(modules){
    if(typeof modules !== 'undefined') {
        for (var i = 0; i < modules.length; i++) {
            this.subModules.push(modules[i]);
        }
    }
};

module.prototype.loadSubModules = function(){
    var modules = this.subModules;
    for(var i =0; i<modules.length; i++) {
        require([modules[i]],function(module){
           module.init();
        });
    }
};