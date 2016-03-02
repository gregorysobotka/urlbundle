define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.templates = App.hb.templates || {};
templates['view'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <h1>"
    + container.escapeExpression(((helper = (helper = helpers.bundleName || (depth0 != null ? depth0.bundleName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bundleName","hash":{},"data":data}) : helper)))
    + "</h1> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "\r\n<div id=\"bundle-container\">\r\n\r\n    <div id=\"view-module\">\r\n\r\n        "
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.bundleName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n        "
    + ((stack1 = ((helper = (helper = helpers.bundleHtml || (depth0 != null ? depth0.bundleHtml : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bundleHtml","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
},"useData":true});return templates['view'];
});