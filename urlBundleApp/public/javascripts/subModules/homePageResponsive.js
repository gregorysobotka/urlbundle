define(function() {

    var publicFunctions = publicFunctions || new subModule('homePageResponsive');

    publicFunctions.extendConfig({
        mainScreen : {
            selector : '.main-screen',
            distanceFromTop : 0,
            heightDefault : 0,
            height : 0
        }
    });

    publicFunctions.updateConfig = function(){
        publicFunctions.config.mainScreen.height = $(publicFunctions.config.mainScreen.selector).height();
        publicFunctions.config.mainScreen.distanceFromTop = $(window).scrollTop();
    };

    publicFunctions.updateDom = function(direction){

        var newheight = ( publicFunctions.config.mainScreen.height - publicFunctions.config.mainScreen.distanceFromTop > 60 ) ? publicFunctions.config.mainScreen.height - publicFunctions.config.mainScreen.distanceFromTop : 60;
        $(publicFunctions.config.mainScreen.selector).height(newheight);
        $('.center-section').css('padding-top', ( newheight / 2 ) - ( $('.center-section').height() / 2 ) );

        if(newheight === 60) {
            $('.center-section').css('width', '100%');
        }

    };

    publicFunctions.spyDom = function(){

        publicFunctions.updateConfig();
        publicFunctions.updateDom('');
        $('.center-section').show();

        //$(window).scroll(function() {
        //    publicFunctions.updateConfig();
        //    publicFunctions.updateDom();
        //});

    };

    publicFunctions.init = function(){

       $(function(){
           publicFunctions.config.mainScreen.heightDefault = $(publicFunctions.config.mainScreen.selector).height();
           publicFunctions.spyDom();
       });

    };

    return publicFunctions;

});