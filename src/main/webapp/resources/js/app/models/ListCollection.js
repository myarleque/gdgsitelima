GDG.ListCollection = Backbone.Collection.extend({
   url: 'https://dl.dropboxusercontent.com/u/1621947/listCollection.json',

   getByCategory: function(categoryId) {
       if (parseInt(categoryId) !== 0) {
           var filteredModels = this.where({
               category: parseInt(categoryId)
           });
           //Solo hago esto porque where devuelve un arreglo del modelo y se
           //necesita un array de objetos directos
           var result = [];
           for(var i=0;i < filteredModels.length; i++) {
               result.push(filteredModels[i].toJSON());
           }
           return result;
       } else {
           return this.toJSON();
       }
   },

   getItem: function(itemId) {
       return this.findWhere({
           id: parseInt(itemId)
       });
   }
});