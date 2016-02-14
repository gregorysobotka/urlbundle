define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.templates = App.hb.templates || {};
templates['edit'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "\r\n                <div class=\"form-group\">\r\n                     <label>Title and link</label>\r\n                     <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" data-titleNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Url title\"/>\r\n                     <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-textNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\"/>\r\n                    <p><button type=\"button\" class=\"btn btn-danger delete\">Delete</button></p>\r\n                </div>\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n                <p>No urls present</p>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"bundle-container\">\r\n\r\n    <h3>Bundle : "
    + container.escapeExpression(((helper = (helper = helpers.bundleId || (depth0 != null ? depth0.bundleId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bundleId","hash":{},"data":data}) : helper)))
    + "</h3>\r\n\r\n    <form>\r\n        <div id=\"bundle-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bundleUrls : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </form>\r\n\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary form-control\" id=\"add-url\">Add entry</button>\r\n        <button class=\"btn btn-success form-control\" id=\"\">Update</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});return templates['edit'];
});