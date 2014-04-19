GDG.appRouter = Backbone.Router.extend({
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