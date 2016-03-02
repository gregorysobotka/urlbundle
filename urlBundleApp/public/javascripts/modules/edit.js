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

        require(['templates/edit', 'partials/addBundle', 'partials/addMultiBundle'], function(edit, addBundle, addMultiBundle) {

            var bundleDetailsParsed = JSON.parse(bundleDetails.urls),
                bundleHtml = [];

            for(var i=0;i<bundleDetailsParsed.length;i++){

                var bundle = bundleDetailsParsed[i], bundleTemplate = '';

                if(bundle.bundleType === 'multi-bundle-url'){
                    bundle.urls = JSON.parse(bundle.url);
                    bundleTemplate = addMultiBundle(bundle);
                } else if(bundle.bundleType === 'single-bundle-url'){
                    bundleTemplate = addBundle(bundle);
                }

                bundleHtml.push(bundleTemplate);

            }

            $('#edit-mount').html(edit({
                bundleId: bundleDetails.title,
                bundleName: bundleName,
                viewUrl : '/b/'+bundleDetails.title,
                bundleUrls: bundleHtml
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

        var messageUpdate = "", messageClass = "error";

        if( typeof response.ok !== 'undefined' && response.ok == 1 ){
            messageUpdate = "Bundle successfully updated.";
            messageClass = "text-success";
        } else {
            messageUpdate = "There may have been a problem updating your bundle.";
            messageClass = "text-danger";
        }

        $(publicMethods.config.messageId).text(messageUpdate).addClass(messageClass);
        $(publicMethods.config.messageId).show();

        setTimeout(function() {
            $(publicMethods.config.messageId).fadeOut('slow');
        }, 5000);

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

        thisModule.find('#add-multi-url').click(function(){

            require(['partials/addMultiBundle'], function(addBundle) {
                thisModule.find('#bundle-list').append(addBundle);
                events.publish('editListTrigger', { target : publicMethods.config.moduleId + ' #bundle-list .bundle-group' });
            });

        });

        $('body').on('click','.add-single-url', function() {
            var thisUrlSection = $(this).closest('.multi-url-container');
            thisUrlSection.append('<div class="multi-url-wrapper"><input type="text" value="" data-textNumber="" class="form-control url-field" data-for="url" placeholder="http://"/><span class="glyphicon glyphicon-remove text-danger remove-single hover" ></span></div>');
        });

        $('body').on('click', '.remove-single', function(){
            $(this).parent('.multi-url-wrapper').remove();
        });

        // remove url click
        $('body').on('click', publicMethods.config.moduleId + ' button.delete',function(){
            $(this).parents('div.form-group:first').remove();
            events.publish('editListTrigger', { target : publicMethods.config.moduleId + ' #bundle-list .bundle-group' });
        });

        // Update form
        $('body').on('click', publicMethods.config.moduleId + ' #update-url',function(){

            var bundleList = [], url;
            $(publicMethods.config.moduleId).find('.bundle-group').each(function(count){

                var bundleType = $(this).attr('data-bundleType');

                if(bundleType === 'single-bundle-url'){
                    url = $(this).find('.url-field').val();
                } else if(bundleType === 'multi-bundle-url'){
                    url = [];
                    var childUrls = $(this).find('.multi-url-wrapper :input');
                    if(childUrls.length > 0){
                        for(var i=0; i<childUrls.length; i++){
                            url.push($(childUrls[i]).val());
                        }
                    } else {
                        url.push(childUrls[0]);
                    }

                    url = JSON.stringify(url);

                }

                var title = $(this).find('.title-field').val();
                var text = $(this).find('.text-field').val();

                bundleList[count] = {
                    title : title,
                    text : text,
                    url : url,
                    bundleType : bundleType
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