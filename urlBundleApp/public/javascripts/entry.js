require(['app', 'pageModuleMap'], function(App, map){

    App.pageId = pageConfig.pageId;
    window.App = App;

    // List of modules to be loaded on page
    var moduleMap = map[App.pageId];

    if(typeof moduleMap !== 'undefined') {
        for (var moduleCount in moduleMap.modules) {
            require([moduleMap.modules[moduleCount]], function (module) {
                if (moduleMap.subModules !== 'undefined') module.registerSubModules(moduleMap.subModules);
                App.registerModule(module);
            });
        }
    }

});