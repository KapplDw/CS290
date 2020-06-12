(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['menu_item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\" col-md-6 col-lg-6\">\n    <div class=\"box\">\n        <img src= "
    + alias4(((helper = (helper = lookupProperty(helpers,"picture") || (depth0 != null ? lookupProperty(depth0,"picture") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":29}}}) : helper)))
    + " class=\"img-fluid\" alt=\"Picture of food.\">\n        <button type=\"button\" class=\"menu_item hidBTN hidden\">&times;</button>\n        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":20}}}) : helper)))
    + "</h3>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"cost") || (depth0 != null ? lookupProperty(depth0,"cost") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cost","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":19}}}) : helper)))
    + "</p>\n    </div>\n</div>\n";
},"useData":true});
})();