define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.partials = App.hb.partials || {};
templates['addMultiBundle'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "                <div class=\"multi-url-wrapper\">\r\n                    <input type=\"text\" value=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" data-textNumber=\""
    + alias1(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control url-field\" data-for=\"url\" placeholder=\"http://\"/>\r\n\r\n"
    + ((stack1 = helpers["if"].call(depth0,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n                </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"glyphicon glyphicon-plus hover add-single-url\" ></span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"glyphicon glyphicon-remove text-danger remove-single hover\" ></span>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"multi-url-wrapper\">\r\n                    <input type=\"text\" value=\"\" data-textNumber=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control url-field\" data-for=\"url\" placeholder=\"http://\"/><span class=\"glyphicon glyphicon-plus hover add-single-url\" ></span>\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"form-group bundle-group clearfix\" data-bundleType=\"multi-bundle-url\">\r\n\r\n    <div class=\"left-container\">\r\n\r\n        <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control title-field\" data-titleNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Url title\" data-for=\"title\"/>\r\n\r\n        <div class=\"multi-url-container\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n        <textarea class=\"form-control text-field\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        <button type=\"button\" class=\"btn btn-danger delete\">Delete</button>\r\n    </div>\r\n\r\n    <div class=\"right-container\">\r\n        <span class=\"glyphicon glyphicon-chevron-up change-order move-up\" aria-hidden=\"true\" data-move=\"up\"></span>\r\n        <span class=\"glyphicon glyphicon-chevron-down change-order move-down\" aria-hidden=\"true\" data-move=\"down\"></span>\r\n    </div>\r\n    \r\n</div>\r\n";
},"useData":true});return templates['addMultiBundle'];
});