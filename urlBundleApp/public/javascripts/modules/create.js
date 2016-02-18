define(function(){

    var publicMethods = publicMethods || new module('create');

    publicMethods.watchForm = function(){
        var self = this;
        $('#submit-create').click(function(){
            self.requestCreateBundle($('#bundleName').val());
        });
    };

    publicMethods.requestCreateBundle = function(bundleId, callBackOverride){

         $.ajax({
            type: "POST",
            url: '/api/v1/createBundle',
            data: {bundleId : bundleId},
            success: function(response){
                typeof callBackOverride === 'undefined' ? publicMethods.handleRequest(response) : callBackOverride(response);
            },
            error: function(response){

            }
        });

    };

    publicMethods.handleRequest = function(response){
        if( typeof response.insertedCount !== 'undefined' && response.insertedCount > 0){
            publicMethods.loadUrlCreationForm(response);
        } else {
            $('#bundle-create-message').html('<p class="btn-danger">There may have been a problem creating your bundle. Try a new name or generate a new random one.</p>');
        }
    };

    publicMethods.loadUrlCreationForm = function(response){

        var insertId = response.ops[0]._id;
        var bundleId = response.ops[0].bundleId;

        window.location.href="/edit/"+bundleId+'?eid='+insertId;

    };

    publicMethods.init = function(){

        this.watchForm();

        this.loadSubModules();

    };

    return publicMethods;

});