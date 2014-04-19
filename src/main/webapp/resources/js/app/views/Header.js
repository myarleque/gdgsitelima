GDG.Header = Backbone.View.extend({

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
});