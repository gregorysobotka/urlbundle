define(function() {

    return {
        home :  { modules : ['modules/homePage'], subModules : ['subModules/randomBackground','subModules/homePageResponsive'] },
        create : { modules : ['modules/create'], subModules : ['subModules/randomGenerator'] },
        editBundle : { modules : ['modules/edit'], subModules : ['subModules/editReorder'] },
        viewBundle : { modules : ['modules/viewBundle'] }
    };

});