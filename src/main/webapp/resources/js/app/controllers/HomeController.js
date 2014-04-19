GDG.HomeController = function() {};

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

});