define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.templates = App.hb.templates || {};
templates['edit'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n                "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n                //\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"bundle-container\">\r\n\r\n    <label>Name / short description</label>\r\n    <p><input type=\"text\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.bundleName || (depth0 != null ? depth0.bundleName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bundleName","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control title-field\" id=\"bundleName\"/></p> </br>\r\n\r\n    <form>\r\n        <div id=\"bundle-list\">\r\n\r\n            <label>url w/ details</label>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bundleUrls : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"form-group button-actions\">\r\n        <button class=\"btn btn-primary form-control half-button\" id=\"add-url\">+ Single url</button>\r\n        <button class=\"btn btn-primary form-control half-button\" id=\"add-multi-url\">+ Multiple url</button>\r\n        <button class=\"btn btn-primary form-control\" id=\"update-url\">Update</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});return templates['edit'];
});