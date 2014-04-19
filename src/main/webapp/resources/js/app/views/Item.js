GDG.Item = Backbone.View.extend({

    template: Handlebars.templates['item'],

    initialize: function() {},

    render: function() {
        this.$el.html(this.template({ item: this.model}));
    }
});