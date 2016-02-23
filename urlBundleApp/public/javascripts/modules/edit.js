define(function(){

    var publicMethods = publicMethods || new module('edit');

    publicMethods.extendConfig({
        moduleId : '#bundle-container',
        messageId : '#edit-status',
        eid : '',
        bundleId : '',
        bundleName : ''
    });

    publicMethods.requestBundleDetails = function(editConfig, callBackOverride){

         $.ajax({
            type: "GET",
            url: '/api/v1/getBundle/' + editConfig.bundleId,
            data: { eid : editConfig.eid },
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
        var bundleName = publicMethods.config.bundleName = response.bundleName;

        require(['templates/edit'], function(edit) {

            $('#edit-mount').html(edit({
                bundleId: bundleDetails.title,
                bundleName: bundleName,
                viewUrl : '/b/'+bundleDetails.title,
                bundleUrls: JSON.parse(bundleDetails.urls)
            }));

            //watch for dom actions related to module
            publicMethods.spy();

        });

    };

    publicMethods.updateBundleDetails = function(urlBundle, callBackOverride){

        //updateBundle
        $.ajax({
            type: "POST",
            url: '/api/v1/updateBundle/' + publicMethods.config.bundleId,
            data: { eid : publicMethods.config.eid, bundleName : publicMethods.config.bundleName, urlBundle : JSON.stringify(urlBundle) },
            success: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handlePostRequest(response) : callBackOverride(response);
            },
            error: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handlePostRequest(response) : callBackOverride(response);
            }
        });

    };

    publicMethods.handlePostRequest = function(response){
        console.log(' * POST REQUEST RESPONSE *');
        console.log(response);
        console.log(' * POST REQUEST RESPONSE *');
    };

    publicMethods.spy = function(){

        var thisModule = $(this.config.moduleId);

        // add url click
        thisModule.find('#add-url').click(function(){

            require(['partials/addBundle'], function(addBundle) {
                thisModule.find('#bundle-list').append(addBundle);
                events.publish('editListTrigger', { target : publicMethods.config.moduleId + ' #bundle-list .bundle-group' });
            });

        });

        // remove url click
        $('body').on('click', publicMethods.config.moduleId + ' button.delete',function(){
            $(this).parents('div.form-group:first').remove();
            events.publish('editListTrigger', { target : publicMethods.config.moduleId + ' #bundle-list .bundle-group' });
        });

        // Update form
        $('body').on('click', publicMethods.config.moduleId + ' #update-url',function(){

            var bundleList = [];
            $(publicMethods.config.moduleId).find('.bundle-group').each(function(count){

                var url = $(this).find('.url-field').val();
                var title = $(this).find('.title-field').val();
                var text = $(this).find('.text-field').val();

                bundleList[count] = {
                    url : url,
                    title : title,
                    text : text
                }

            });

            publicMethods.updateNonRequired();

            publicMethods.updateBundleDetails(bundleList);

        });

        events.publish('editListTrigger', { target : publicMethods.config.moduleId + ' #bundle-list .bundle-group' });

    };

    publicMethods.updateNonRequired = function(){
        publicMethods.config.bundleName = $('#bundleName').val();
    };

    publicMethods.abortModule = function(){
        //nny
    };

    publicMethods.init = function(){
        // for now, editConfigis a global variable.
        typeof pageConfig !== 'undefined' ? this.requestBundleDetails(pageConfig) : this.abortModule();

        this.config.eid = pageConfig.eid;
        this.config.bundleId = pageConfig.bundleId;

        this.loadSubModules();


    };

    return publicMethods;

});