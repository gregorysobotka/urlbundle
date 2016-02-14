define(function(){

    var publicMethods = publicMethods || {};

    publicMethods.config = {
        moduleId : '#bundle-container',
        domElement : {}
    };

    publicMethods.requestBundleDetails = function(editConfig, callBackOverride){

         $.ajax({
            type: "GET",
            url: '/api/v1/getBundle/' + editConfig.bundleId,
            data: { eid : editConfig.eid },
            success: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handleRequest(response) : callBackOverride(response);
            },
            error: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handleRequest(response) : callBackOverride(response);
            }
        });

    };

    publicMethods.handleRequest = function(response){

        var bundleDetails = response.details;

        require(['templates/edit'], function(edit) {

            $('#edit-mount').html(edit({
                bundleId: bundleDetails.title,
                bundleUrls: bundleDetails.urls
            }));

            //watch for dom actions related to module
            publicMethods.spy();

        });

    };

    publicMethods.spy = function(){

        var thisModule = $(this.config.moduleId);

        // add url click
        thisModule.find('#add-url').click(function(){

            require(['partials/addBundle'], function(addBundle) {
                thisModule.find('#bundle-list').append(addBundle);
            });

        });

        // remove url click
        $('body').on('click', this.config.moduleId + ' button.delete',function(section){
            console.log(section);
            $(this).parents('div.form-group:first').remove();
        });

    };

    publicMethods.abortModule = function(){
        //
    };

    publicMethods.init = function(){

        typeof editConfig !== 'undefined' ? this.requestBundleDetails(editConfig) : this.abortModule();

    };

    return publicMethods;

});