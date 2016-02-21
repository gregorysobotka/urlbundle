define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.templates = App.hb.templates || {};
templates['edit'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "                <label>url w/ details</label>\r\n                <div class=\"form-group bundle-group clearfix\">\r\n\r\n                     <div class=\"left-container\">\r\n                         <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control title-field\" data-titleNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Url title\" data-for=\"title\"/>\r\n                         <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-textNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control url-field\" data-for=\"url\"/>\r\n                         <textarea class=\"form-control text-field\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n                         <button type=\"button\" class=\"btn btn-danger delete\">Delete</button>\r\n                     </div>\r\n\r\n                    <!--<div class=\"right-container\">-->\r\n                        <!--<button>Up</button>-->\r\n                        <!--<button>Down</button>-->\r\n                    <!--</div>-->\r\n                </div>\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "\r\n                <p>No urls present</p>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"bundle-container\">\r\n\r\n    <label>Name / short description</label>\r\n    <p><input type=\"text\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.bundleName || (depth0 != null ? depth0.bundleName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"bundleName","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control title-field\" id=\"bundle-name\"/></p> </br>\r\n\r\n    <form>\r\n        <div id=\"bundle-list\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.bundleUrls : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"form-group button-actions\">\r\n        <button class=\"btn btn-primary form-control\" id=\"add-url\">Add entry</button>\r\n        <button class=\"btn btn-primary form-control\" id=\"update-url\">Update</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});return templates['edit'];
});