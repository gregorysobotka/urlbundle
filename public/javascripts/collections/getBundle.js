define(['getBundle'], function() {

    /*

        Details :

     */

    var getBundle = Backbone.Collection.extend({
       url : '/getBundle'
    });

    return getBundle;

});