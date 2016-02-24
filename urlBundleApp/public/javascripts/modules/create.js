define(function(){

    var publicMethods = publicMethods || new module('create');

    publicMethods.watchForm = function(){

        var self = this;

        $('#submit-create').click(function(){
            self.requestCreateBundle($('#bundleName').val());
        });

        $("#bundleName").on("change keyup paste click", function(){
            var newText = $(this).val();

            if(newText.length >= 3){
                publicMethods.isBundleAvailable(newText);
            }
        });

    };

    publicMethods.isBundleAvailable = function(bundleId){

        $.get('/api/v1/getBundle/'+bundleId,function(response){

            var message = 'Not Available';
            var className = 'alert alert-danger';

            if(typeof response.bundle !== 'undefined' && response.bundle == 'empty'){
                message = 'Available';
                className = 'alert alert-success';
            }

            $('#bundle-create-message').text(message).show().removeClass().addClass(className);

        });

    };

    publicMethods.cleanInput = function(val){

        return val.replace(/\W/g, '-');

    };

    publicMethods.requestCreateBundle = function(bundleId, callBackOverride){

         $.ajax({
            type: "POST",
            url: '/api/v1/createBundle',
            data: {bundleId : publicMethods.cleanInput(bundleId)},
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
            $('#bundle-create-message').text('There may have been a problem creating your bundle. Try a new name or generate a new random one.').addClass('alert alert-danger');
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