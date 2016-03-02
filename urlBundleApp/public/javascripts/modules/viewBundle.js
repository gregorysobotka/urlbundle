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

        require(['templates/view', 'partials/viewMultiBundle', 'partials/viewBundle'], function(view, viewMultiBundle, viewBundle) {

            var bundleDetails = response.details;
            var bundleDetailsParsed = JSON.parse(bundleDetails.urls),
                bundleHtml = [];

            for(var i=0;i<bundleDetailsParsed.length;i++){

                var bundle = bundleDetailsParsed[i], bundleTemplate = '';

                if(bundle.bundleType === 'multi-bundle-url'){
                    bundle.urls = JSON.parse(bundle.url);
                    bundleTemplate = viewMultiBundle(bundle);
                } else if(bundle.bundleType === 'single-bundle-url'){
                    bundleTemplate = viewBundle(bundle);
                }

                bundleHtml = bundleHtml + bundleTemplate;

            }

            $(publicMethods.config.moduleId).html(view({
                bundleId: bundleDetails.title,
                bundleName : response.bundleName,
                bundleHtml : bundleHtml
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