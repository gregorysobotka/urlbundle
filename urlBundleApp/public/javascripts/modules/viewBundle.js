define(function(){

    var publicMethods = publicMethods || new module('viewBundle');

    publicMethods.extendConfig({
        moduleId : '#view-bundle',
        bundleId : ''
    });

    publicMethods.requestBundleDetails = function(pageConfig, callBackOverride){

         $.ajax({
            type: "GET",
            url: '/api/v1/getBundle/' + pageConfig.bundleId,
            success: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handleGetRequest(response) : callBackOverride(response);
            },
            error: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handleGetRequest(response) : callBackOverride(response);
            }
        });

    };

    publicMethods.handleGetRequest = function(response){

        var bundleDetails = response.details;

        require(['templates/view'], function(view) {

            $(publicMethods.config.moduleId).html(view({
                bundleId: bundleDetails.title,
                bundleUrls: JSON.parse(bundleDetails.urls)
            }));

        });

    };

    publicMethods.abortModule = function(){
        //nny
    };

    publicMethods.init = function(){

        // for now, editConfigis a global variable.
        typeof pageConfig !== 'undefined' ? this.requestBundleDetails(pageConfig) : this.abortModule();
        this.config.bundleId = pageConfig.bundleId;

    };

    return publicMethods;

});