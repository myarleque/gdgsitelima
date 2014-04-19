GDG.DetailsLayout = Backbone.View.extend({

    template : Handlebars.templates['details-layout'],

    render: function(){
        this.$el.html(this.template({}));
    }
});