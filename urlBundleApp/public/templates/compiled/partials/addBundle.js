define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.partials = App.hb.partials || {};
templates['addBundle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"form-group bundle-group clearfix\">\r\n\r\n    <div class=\"left-container\">\r\n        <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control title-field\" data-titleNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"Url title\" data-for=\"title\"/>\r\n        <input type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-textNumber=\""
    + alias3(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control url-field\" data-for=\"url\" placeholder=\"http://\"/>\r\n        <textarea class=\"form-control text-field\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        <button type=\"button\" class=\"btn btn-danger delete\">Delete</button>\r\n    </div>\r\n    <div class=\"right-container\">\r\n        <span class=\"glyphicon glyphicon-chevron-up change-order move-up\" aria-hidden=\"true\" data-move=\"up\"></span>\r\n        <span class=\"glyphicon glyphicon-chevron-down change-order move-down\" aria-hidden=\"true\" data-move=\"down\"></span>\r\n    </div>\r\n</div>\r\n";
},"useData":true});return templates['addBundle'];
});