GDG.Login = Backbone.View.extend({

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
});