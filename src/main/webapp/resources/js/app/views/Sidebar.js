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




});