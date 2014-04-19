GDG.LoginModel = Backbone.Model.extend({

    authenticate: function(email,password) {
        //Por ahora no vamos a llamar al servidor por lo tanto siempre retornamos true
        return true;
    }

});