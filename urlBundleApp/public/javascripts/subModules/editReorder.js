define(function(){

    var publicMethods = publicMethods || new subModule('editReorder');

    publicMethods.handleChange = function(domReference){

        var domObject = $(domReference);
        var domLength = ( domObject.length !== undefined && domObject.length > 1 ) ? domObject.length : 0;

        if(domLength === 0) {
            $(domObject).find('.change-order').addClass('hidden');
        }

        for(var i=0; i<domLength; i++){
            var currentBundle = domObject[i];

            publicMethods.updateIndex(currentBundle, i);

            if(i === 0) {
                $(currentBundle).find('.move-up').addClass('hidden');
                $(currentBundle).find('.move-down').removeClass('hidden');
            } else if( ( i + 1 ) === domLength){
                $(currentBundle).find('.move-down').addClass('hidden');
                $(currentBundle).find('.move-up').removeClass('hidden');
            } else {
                $(currentBundle).find('.change-order').removeClass('hidden');
            }
        }

    };

    publicMethods.updateIndex = function(currentBundle, index){
        currentBundle.id = 'bundle-id-'+index;
        $(currentBundle).attr('data-position', index);
    };

    publicMethods.handleMove = function(domReference){

        var direction = $(domReference).attr('data-move');
        var currentBundle = $(domReference).closest('.bundle-group');
        var currentId = $(currentBundle).attr('id');
        var currentPosition = parseInt($(currentBundle).attr('data-position'));
        var nextPosition = currentPosition;

        if(direction === 'up'){
            nextPosition = nextPosition - 1;
            $('#'+currentId).after( $('#bundle-id-' + nextPosition).detach() );
        } else if(direction === 'down'){
            nextPosition = nextPosition + 1;
            $('#'+currentId).before( $('#bundle-id-' + nextPosition).detach() );
        }

        events.publish('editListTrigger', { target : '#bundle-container #bundle-list .bundle-group' });

    };

    publicMethods.init = function(){

        events.subscribe('editListTrigger', function(obj) {
            publicMethods.handleChange(obj.target);
        });

        $('body').on('click', '.change-order',function(){

            publicMethods.handleMove(this);

        })

    };

    return publicMethods;

});