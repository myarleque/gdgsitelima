GDG.ViewManager = (function(){
    this.items = [];

    this.addView = function(view){
        return this.items.push(view);
    };

    this.removeAll = function(){
        if(this.items && this.items.length > 0){
            $.each(this.items, function(idx, view){
                if(view && typeof view.close === 'function'){
                    view.close();
                }
            });
        }
    };

    this.remove = function(item){
        var index = $.inArray(item, this.items);
        this.items.splice(index,1);
    };

    return this;
})();