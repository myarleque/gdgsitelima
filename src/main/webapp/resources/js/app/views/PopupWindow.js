GDG.PopupWindow = Backbone.View.extend({
    template : Handlebars.templates['popup-window'],

    buttons: [],

    events: {
        "click .popup-window-footer .popup-window-footer-btn" : "mapFooterButtonHandler",
        "click .modal-header .close-icon" : "close"
    },

    initialize: function(){
        var me = this;

        me.ctClass = me.options.ctClass;
        me.title = me.options.title;
        me.panel = me.options.panel;
        me.buttons = me.options.buttons || [];
        me.buttons.push({
            id: 'cancel-btn',
            name : 'Cancelar',
            hidden: false,
            primary: false,
            handler: function() {
                this.close();
            }
        });
        me.needValidation = me.options.needValidation || false;

        me.listenTo(this.panel, 'ready', function() {
            this.$(".modal-body").append(me.panel.el);
        });
    },

    mapFooterButtonHandler: function(eventObject){
        var buttons = this.$('.popup-window-footer .popup-window-footer-btn'),
            button = eventObject.target,
            idx =  buttons.index(button),
            buttonCfg = this.buttons[idx];

        if(buttonCfg) {
            if (this.needValidation && buttonCfg.id !== "cancel-btn") {
                if (this.panel.validate()) {
                    buttonCfg.handler.call(this, button, buttons);
                }
            } else {
                buttonCfg.handler.call(this, button, buttons);
            }
        }

    },

    render:function(){
        var me = this;

        this.$el.html(this.template({
            ctClass : me.ctClass,
            title : this.title,
            buttons : this.buttons
        }));

        me.panel.render();

        this.$('.modal').modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
    },

    close:function(){
        this.$('.modal').modal('hide');
        this.remove();
    }
});

