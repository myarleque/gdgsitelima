Backbone.View.prototype.close = function() {
  this.stopListening();
  this.remove();
  this.trigger("close");
};