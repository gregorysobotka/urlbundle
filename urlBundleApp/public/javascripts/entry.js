require(['app', 'pageModuleMap'], function(App, map){

    App.pageId = pageConfig.pageId;
    window.App = App;

    // List of modules to be loaded on page
    var moduleList = map[App.pageId];

    for(var moduleCount in moduleList){
        require([moduleList[moduleCount]], function(module){
            App.registerModule(module);
        });
    }

});