define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.templates = App.hb.templates || {};
templates['view'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "                    <li class=\"list-group-item\">\r\n\r\n                        <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "</a>\r\n\r\n                        <div><strong>Details :</strong> "
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</div>\r\n\r\n                    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <p>No urls present</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"bundle-container\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n            <h3>Bundle : "
    + container.escapeExpression(((helper = (helper = helpers.bundleId || (depth0 != null ? depth0.bundleId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bundleId","hash":{},"data":data}) : helper)))
    + "</h3>\r\n\r\n            <ul class=\"list-group\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bundleUrls : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "            </ul>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n        </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});return templates['view'];
});