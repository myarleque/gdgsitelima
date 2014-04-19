GDG.DetailsController = function() {};

$.extend(GDG.DetailsController.prototype, {
    render: function() {
        GDG.ViewManager.removeAll();
        this.displayLayout();
        this.displayHeader();
        this.displayBody();
        this.displayFooter();
    },

    displayLayout: function() {
        var detailsLayout = new GDG.DetailsLayout();
        detailsLayout.render();
        $(detailsLayout.el).appendTo("#content");
        GDG.ViewManager.addView(detailsLayout);
    },

    displayHeader: function() {
        var header = new GDG.Header({
            logo: {
                src: 'images/logo.jpg',
                alt: 'Logo'
            },
            enlaces: [{
                id: 0,
                text: 'Iniciar Sesión',
                show: true,
                textonly: false,
                handler: function() {
                    var loginPopup = new GDG.PopupWindow({
                        ctClass: 'loginPopup',
                        title: 'Iniciar Sesión',
                        needValidation: false,
                        panel: new GDG.Login({
                            model: new GDG.LoginModel()
                        }),
                        buttons: [{
                            id: 'create-btn',
                            name : 'Ingresar',
                            hidden: false,
                            primary: true,
                            handler: function() {
                                loginPopup.panel.authenticate({
                                    success: function(email) {
                                        loginPopup.panel.hideLoginError();
                                        header.login(email);
                                        loginPopup.close();
                                    }
                                });
                            }
                        }]
                    });
                    loginPopup.render();
                    $("body").append(loginPopup.el);
                }
            },{
                id: 1,
                text: '',
                textonly: true,
                show: false
            },{
                id: 2,
                text: 'Salir',
                show: false,
                textonly: false,
                handler: function() {
                    header.logout();
                }
            }]
        });
        header.render();
        $(header.el).appendTo("#header");
        GDG.ViewManager.addView(header);
    },

    displayBody: function() {
        var listCollection = GDG.StoreManager.get('listCollection');
        if (listCollection === null) {
            listCollection = new GDG.ListCollection();
            listCollection.fetch({reset:true});
            listCollection.on('reset',function() {
                var itemModel = listCollection.getItem(GDG.itemID).toJSON();
                var itemView = new GDG.Item({
                    model: itemModel
                });
                itemView.render();
                $(itemView.el).appendTo(".page-content");
                GDG.ViewManager.addView(itemView);
            });
        } else {
            //Para mejorar la velocidad no recargo todo sino que reutilizo el codigo
            var itemModel = listCollection.getItem(GDG.itemID).toJSON();
            var itemView = GDG.Item({
                model: itemModel
            });
            itemView.render();
            $(itemView.el).appendTo(".page-content");
            GDG.ViewManager.addView(itemView);
        }
    },

    displayFooter: function() {
        var footer = new GDG.Footer();
        footer.render();
        $(footer.el).appendTo("#footer");
    }

});