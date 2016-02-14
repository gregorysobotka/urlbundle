require(['app', 'pageModuleMap'], function(App, map){

    App.pageId = pageId;
    window.App = App;

    // List of modules to be loaded on page
    var moduleList = map[pageId];

    for(var moduleCount in moduleList){
        require([moduleList[moduleCount]], function(module){
            App.registerModule(module);
        });
    }

});