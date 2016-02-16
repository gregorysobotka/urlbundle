define(function(){

    var appNamespace = (function() {

        /*

            pageId : (used for context and module mapping)

         */

        return {
            pageId : '',
            bundleCollections : {},
            bundleCollection : {},
            router : null,
            hb : {},
            modules : []
        };

    })();

    appNamespace.registerModule = function(moduleObject){

        this.modules.push(moduleObject);

        // After reference to module has been stored within the scope of the app, initialize the module
        if(moduleObject.hasOwnProperty('init')){
            moduleObject.init();
        }

    };

    return appNamespace;

});