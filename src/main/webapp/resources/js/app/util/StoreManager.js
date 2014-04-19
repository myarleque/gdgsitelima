GDG.StoreManagerClass = function(){};
$.extend(GDG.StoreManagerClass.prototype, {

    items:{},

    get: function(key){
        return this.items[key] || null;
    },

    put: function(key, value){
        this.items[key] = value;
    },

    removeAll: function() {
        this.items = {};
    },

    remove: function(key) {
        try {
            delete this.items[key];
        } catch(e) {};
    }
});
GDG.StoreManager = new GDG.StoreManagerClass();