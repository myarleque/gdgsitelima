GDG.List = Backbone.View.extend({

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
});