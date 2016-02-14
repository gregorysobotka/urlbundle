define(['hb'], function (Handlebars) {
var template = Handlebars.template, templates = App.hb.templates = App.hb.templates || {};
templates['create'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<label>Title</label>\r\n\r\n<input type=\"text\" id=\"bundle-title\" placeholder=\"\"/>\r\n\r\n<button>Update</button>\r\n\r\n";
},"useData":true});return templates['create'];
});