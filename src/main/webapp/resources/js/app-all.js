(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['base-layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\" class=\"container\"></div>\n\n<div id=\"body\" \">\n    <div class=\"row\">\n      \n        <div class=\"main-content\">\n            <div class=\"page-content\">\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"footer\" ></div>";
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['details-layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\" class=\"container\"></div>\n<div class=\"clearfix\"></div>\n<div id=\"body\" class=\"container rounded\">\n    <div class=\"row\">\n        <div class=\"details-main-content\">\n            <div class=\"page-content details-content\">\n            </div>\n            <div class=\"comments\">\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"footer\" class=\"container\"></div>";
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"footer\">\n        <p>&copy; 2014 GDG Lima - <a ng-href=\"/about\">About</a></p>\n        <p>GDG Lima es un grupo independiente; nuestras actividades y las opiniones expresadas en esta +Pagina no deben relacionarse de ninguna forma a Google, la corporación.</p>\n    </div>";
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, depth0.show, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        	<li>\n    					<a data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n					</li>\n                       ";
  return buffer;
  }

  buffer += "\n<div class=\"navbar navbar-inverse navbar-fixed-top\">\n\n<div class=\"color_bar\"></div>\n    <div class=\"container\" id=\"top_bar\">\n        <div class=\"pull-left\">\n            <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.logo),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"pull-left\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.logo),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n \n        </div>\n    \n    </div>\n\n\n   \n     <div class=\"navbar-inner\" id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"nav-collapse collapse\">\n                <ul class=\"nav\">\n\n                   ";
  stack2 = helpers.each.call(depth0, depth0.enlaces, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            </div>\n\n        </div>\n    </div>\n\n\n\n</div>";
  return buffer;
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"row item\">\n        <div class=\"pull-left\">\n            <img src=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n        </div>\n        <div class=\"pull-left details\">\n            <h3 class=\"name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n            <p>";
  if (stack1 = helpers.producer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.producer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p>";
  if (stack1 = helpers.stars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stars; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " estrellas / ";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n    </div>\n";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.item, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['list'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"col-md-3\">\n            <div class=\"thumbnail item\">\n                <a href=\"#details/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <img alt=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" src=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n                </a>\n                <h5><a href=\"#details/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></h5>\n                <p>";
  if (stack1 = helpers.producer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.producer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n                <div class=\"info-days\">\n                    <div class=\"left\">\n                        ";
  if (stack1 = helpers.stars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stars; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " estrellas / ";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                    </div>\n                    <div class=\"clear\"></div>\n                </div>\n            </div>\n        </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"alert alert-danger errorMessage\" style=\"display:none\">Complete todos los campos para poder continuar</div>\n<div class=\"form-signin\" role=\"form\">\n    <input id=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Correo Electrónico\" required=\"\" autofocus=\"\">\n    <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" required=\"\">\n</div>";
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['popup-window'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <a href=\"javascript:void(0);\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"popup-window-footer-btn btn btn-small ";
  stack1 = helpers['if'].call(depth0, depth0.primary, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, depth0.primary, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.hidden, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " btn-primary ";
  }

function program4(depth0,data) {
  
  
  return "btn-danger";
  }

function program6(depth0,data) {
  
  
  return "hidden-button";
  }

  buffer += "<div class=\"popup-window modal ";
  if (stack1 = helpers.ctClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ctClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n        </div>\n        <div class=\"modal-body\">\n        </div>\n        <div class=\"popup-window-footer modal-footer\">\n            <div class=\"main-buttons\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.buttons, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n     </div>\n   </div>\n</div>";
  return buffer;
  } ); })();(function() { var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};templates['sidebar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span12\">\n      <h2>Bienvenidos al GDG Lima</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"span12 card\" id=\"group_pic\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"span12\">\n      <div class=\"row\">\n        <div class=\"span6\">\n          <h3><i class=\"fa fa-home\"></i> Introducción</h3>\n          <div class=\"card\">\n            <div class=\"card-wh-body\">\nEl Google Developer Group - GDG Lima es una comunidad que investiga, comparte y difunde tecnologia Google en las areas de desarrollo de software basado en Cloud, Mobile y Web; \ntales como Google Apps API, Apps Script, App Engine, GWT,  HTML5, API Maps, entre otras tecnologias.            \n </div>\n          </div>\n        </div>\n        <div class=\"span6\">\n          <h3><i class=\"fa fa-rocket\"></i> Objetivo</h3>\n          <div class=\"card\">\n            <div class=\"card-wh-body\">\nNuestro objetivo es fortalecer los conocimientos de los profesionales de TI en la región difundiendo dichas \ntecnologias mediante eventos, workshops, reuniones mensuales, hangouts, entre otras actividades.          \n  </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"span12\">\n          <h3><i class=\"fa fa-group\"></i> Forma parte de nosotros</h3>\n          <div class=\"card\">\n            <div class=\"card-wh-body\">\n       La participación es libre y gratuita, tanto para principiantes, desarrolladores, \nlideres de proyectos y organizaciones en general interesadas en utilizar tecnologia Google en sus proyectos.            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
  } ); })();GDG.CategoriesCollection = Backbone.Collection.extend({
   url: 'https://dl.dropboxusercontent.com/s/349uji6aybn9ao6/categories.json'
});



GDG.CommentsCollection = Backbone.Collection.extend({
   localStorage: new Backbone.LocalStorage("comments")
});GDG.ListCollection = Backbone.Collection.extend({
   url: 'https://dl.dropboxusercontent.com/u/1621947/listCollection.json',

   getByCategory: function(categoryId) {
       if (parseInt(categoryId) !== 0) {
           var filteredModels = this.where({
               category: parseInt(categoryId)
           });
           //Solo hago esto porque where devuelve un arreglo del modelo y se
           //necesita un array de objetos directos
           var result = [];
           for(var i=0;i < filteredModels.length; i++) {
               result.push(filteredModels[i].toJSON());
           }
           return result;
       } else {
           return this.toJSON();
       }
   },

   getItem: function(itemId) {
       return this.findWhere({
           id: parseInt(itemId)
       });
   }
});GDG.LoginModel = Backbone.Model.extend({

    authenticate: function(email,password) {
        //Por ahora no vamos a llamar al servidor por lo tanto siempre retornamos true
        return true;
    }

});GDG.StoreManagerClass = function(){};
$.extend(GDG.StoreManagerClass.prototype, {

    items:{},

    get: function(key){
        return this.items[key] || null;
    },

    put: function(key, value){
        this.items[key] = value;
    },

    removeAll: function() {
        this.items = {};
    },

    remove: function(key) {
        try {
            delete this.items[key];
        } catch(e) {};
    }
});
GDG.StoreManager = new GDG.StoreManagerClass();GDG.ViewManager = (function(){
    this.items = [];

    this.addView = function(view){
        return this.items.push(view);
    };

    this.removeAll = function(){
        if(this.items && this.items.length > 0){
            $.each(this.items, function(idx, view){
                if(view && typeof view.close === 'function'){
                    view.close();
                }
            });
        }
    };

    this.remove = function(item){
        var index = $.inArray(item, this.items);
        this.items.splice(index,1);
    };

    return this;
})();Backbone.View.prototype.close = function() {
  this.stopListening();
  this.remove();
  this.trigger("close");
};GDG.BaseLayout = Backbone.View.extend({

    template : Handlebars.templates['base-layout'],

    render: function(){
        this.$el.html(this.template({}));
    }
});GDG.Comments = Backbone.View.extend({

    template: Handlebars.templates['comments']
});GDG.DetailsLayout = Backbone.View.extend({

    template : Handlebars.templates['details-layout'],

    render: function(){
        this.$el.html(this.template({}));
    }
});GDG.Footer = Backbone.View.extend({

    template: Handlebars.templates['footer'],

    initialize: function() {
        //Aqui se puede poner configuracion inicial
    },

    render: function() {
        this.$el.html(this.template({
            //Algun parametro que le querramos configurar
        }));
    }
});GDG.Header = Backbone.View.extend({

   template: Handlebars.templates['header'],

    events: {
        "click .link" : "openLink",
        "click .logout" : "logoutLink"
    },

    initialize: function() {
        //Aqui se puede poner configuracion inicial
    },

    render: function() {
        this.$el.html(this.template({
            //Algun parametro que le querramos configurar
            logo: this.options.logo,
            enlaces: this.options.enlaces
        }));
    },
    //Otra forma de llamar codigo es mediante handlers que se pueden pasar como parametro
    openLink: function(e) {
        e.preventDefault();
        //Obtengo cual es indice del elemento al que le hice click
        var idx = $(e.target).attr("data-id");
        //LLamo a handler que le pase como parametro
        this.options.enlaces[idx].handler();
    },

    login: function(email) {
        this.options.enlaces[0].show = false;
        this.options.enlaces[1].show = true;
        this.options.enlaces[1].text = email;
        this.options.enlaces[2].show = true;
        this.render();
    },

    logout: function() {
        this.options.enlaces[0].show = true;
        this.options.enlaces[1].show = false;
        this.options.enlaces[2].show = false;
        this.render();
    }  
});GDG.Item = Backbone.View.extend({

    template: Handlebars.templates['item'],

    initialize: function() {},

    render: function() {
        this.$el.html(this.template({ item: this.model}));
    }
});GDG.List = Backbone.View.extend({

    template: Handlebars.templates['list'],

    categoryId: 0,
    
    initialize: function() {
        this.listenTo(this.model, 'reset',  this.render);
    },

    render: function() {
        this.$el.html(this.template({
            list: this.model.getByCategory(this.categoryId)
        }));
    }
});GDG.Login = Backbone.View.extend({

    template: Handlebars.templates['login'],

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template({}));
        this.trigger("ready");
    },

    authenticate: function(options) {
        var email = this.$el.find("#email").val();
        var password = this.$el.find("#password").val();

        if (email !== "" && password !== "") {
            if (this.model.authenticate(email,password)) {
                options.success(email);
            } else {
                this.$el.find(".errorMessage").show();
            }
        } else {
            this.$el.find(".errorMessage").show();
        }
    },

    hideLoginError: function() {
        this.$el.find(".errorMessage").hide();
    }
});GDG.PopupWindow = Backbone.View.extend({
    template : Handlebars.templates['popup-window'],

    buttons: [],

    events: {
        "click .popup-window-footer .popup-window-footer-btn" : "mapFooterButtonHandler",
        "click .modal-header .close-icon" : "close"
    },

    initialize: function(){
        var me = this;

        me.ctClass = me.options.ctClass;
        me.title = me.options.title;
        me.panel = me.options.panel;
        me.buttons = me.options.buttons || [];
        me.buttons.push({
            id: 'cancel-btn',
            name : 'Cancelar',
            hidden: false,
            primary: false,
            handler: function() {
                this.close();
            }
        });
        me.needValidation = me.options.needValidation || false;

        me.listenTo(this.panel, 'ready', function() {
            this.$(".modal-body").append(me.panel.el);
        });
    },

    mapFooterButtonHandler: function(eventObject){
        var buttons = this.$('.popup-window-footer .popup-window-footer-btn'),
            button = eventObject.target,
            idx =  buttons.index(button),
            buttonCfg = this.buttons[idx];

        if(buttonCfg) {
            if (this.needValidation && buttonCfg.id !== "cancel-btn") {
                if (this.panel.validate()) {
                    buttonCfg.handler.call(this, button, buttons);
                }
            } else {
                buttonCfg.handler.call(this, button, buttons);
            }
        }

    },

    render:function(){
        var me = this;

        this.$el.html(this.template({
            ctClass : me.ctClass,
            title : this.title,
            buttons : this.buttons
        }));

        me.panel.render();

        this.$('.modal').modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
    },

    close:function(){
        this.$('.modal').modal('hide');
        this.remove();
    }
});

GDG.Sidebar = Backbone.View.extend({

    template: Handlebars.templates['sidebar'],
 initialize: function() {
        //Aqui se puede poner configuracion inicial
    },

    render: function() {
        this.$el.html(this.template({
            //Algun parametro que le querramos configurar
        }));
    }




});GDG.DetailsController = function() {};

$.extend(GDG.DetailsController.prototype, {
    render: function() {
        GDG.ViewManager.removeAll();
        this.displayLayout();
        this.displayHeader();
        this.displayBody();
        this.displayFooter();
    },

    displayLayout: function() {
        var detailsLayout = new GDG.DetailsLayout();
        detailsLayout.render();
        $(detailsLayout.el).appendTo("#content");
        GDG.ViewManager.addView(detailsLayout);
    },

    displayHeader: function() {
        var header = new GDG.Header({
            logo: {
                src: 'images/logo.jpg',
                alt: 'Logo'
            },
            enlaces: [{
                id: 0,
                text: 'Iniciar Sesión',
                show: true,
                textonly: false,
                handler: function() {
                    var loginPopup = new GDG.PopupWindow({
                        ctClass: 'loginPopup',
                        title: 'Iniciar Sesión',
                        needValidation: false,
                        panel: new GDG.Login({
                            model: new GDG.LoginModel()
                        }),
                        buttons: [{
                            id: 'create-btn',
                            name : 'Ingresar',
                            hidden: false,
                            primary: true,
                            handler: function() {
                                loginPopup.panel.authenticate({
                                    success: function(email) {
                                        loginPopup.panel.hideLoginError();
                                        header.login(email);
                                        loginPopup.close();
                                    }
                                });
                            }
                        }]
                    });
                    loginPopup.render();
                    $("body").append(loginPopup.el);
                }
            },{
                id: 1,
                text: '',
                textonly: true,
                show: false
            },{
                id: 2,
                text: 'Salir',
                show: false,
                textonly: false,
                handler: function() {
                    header.logout();
                }
            }]
        });
        header.render();
        $(header.el).appendTo("#header");
        GDG.ViewManager.addView(header);
    },

    displayBody: function() {
        var listCollection = GDG.StoreManager.get('listCollection');
        if (listCollection === null) {
            listCollection = new GDG.ListCollection();
            listCollection.fetch({reset:true});
            listCollection.on('reset',function() {
                var itemModel = listCollection.getItem(GDG.itemID).toJSON();
                var itemView = new GDG.Item({
                    model: itemModel
                });
                itemView.render();
                $(itemView.el).appendTo(".page-content");
                GDG.ViewManager.addView(itemView);
            });
        } else {
            //Para mejorar la velocidad no recargo todo sino que reutilizo el codigo
            var itemModel = listCollection.getItem(GDG.itemID).toJSON();
            var itemView = GDG.Item({
                model: itemModel
            });
            itemView.render();
            $(itemView.el).appendTo(".page-content");
            GDG.ViewManager.addView(itemView);
        }
    },

    displayFooter: function() {
        var footer = new GDG.Footer();
        footer.render();
        $(footer.el).appendTo("#footer");
    }

});GDG.HomeController = function() {};

$.extend(GDG.HomeController.prototype, {
    render: function() {
        GDG.ViewManager.removeAll();
       this.displayLayout();
        this.displayHeader();
       this.displayBody();
        this.displayFooter();
    },

    displayLayout: function() {
        var baseLayout = new GDG.BaseLayout();
        baseLayout.render();
        $(baseLayout.el).appendTo("#content");
        GDG.ViewManager.addView(baseLayout);
    },

    displayHeader: function() {

      //  var categoriesCollection = new GDG.CategoriesCollection();
       // categoriesCollection.fetch({reset: true});
   
        var header = new GDG.Header({
           //   model: categoriesCollection,
              logo: {
                src: 'images/gdg_lima.png',
                alt: 'Logo'
            },
                enlaces: [{
                id: 0,
                text: 'Inicio',
                show: true,
                textonly: false
        
            },{
                id: 1,
                text: 'Quienes somos',
                textonly: false,
                show: true
            },{
                id: 2,
                text: 'Eventos',
                show: true,
                textonly: false
               
            }]
                  
            
        });
        
     
         header.render();
    
        $(header.el).appendTo("#header");
        GDG.ViewManager.addView(header);
    },

    displayBody: function() {

        var sidebar = new GDG.Sidebar();
        sidebar.render();
        $(sidebar.el).appendTo(".main-content");
        GDG.ViewManager.addView(sidebar);

      },

    displayFooter: function() {
        var footer = new GDG.Footer();
        footer.render();
        $(footer.el).appendTo("#footer");
        GDG.ViewManager.addView(footer);
    }

});GDG.appRouter = Backbone.Router.extend({
    routes: {
        "home" : "displayHome",
        "details/:id" : "displayDetails",
        "*actions" : "defaultRoute"
    },

    initialize: function()
    {

    },

    displayHome: function() {
        var homeController = new GDG.HomeController();
        homeController.render();
    },

    displayDetails: function(id) {
        GDG.itemID = id;
        var detailsController = new GDG.DetailsController();
        detailsController.render();
    },

    defaultRoute: function() {
        this.displayHome();
    }
});