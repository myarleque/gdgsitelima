GDG.BaseLayout = Backbone.View.extend({

    template : Handlebars.templates['base-layout'],

    render: function(){
        this.$el.html(this.template({}));
    }
});