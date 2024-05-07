module.exports = function(Orders) {
    // Method to retrieve all Orders items
    Orders.getAllOrders = function(callback) {
        Orders.find({}, function(err, item) {
        if (err) return callback(err);
        callback(null, item);
      });
    };
  
    // Method to create a new Orders item
    Orders.createOrders = function(data, callback) {
        Orders.create(data, function(err, newItem) {
        if (err) return callback(err);
        callback(null, newItem);
      });
    };

    // Method to update a Orders item
    Orders.updateOrders = function(id, data, callback) {
        Orders.findById(id, function(err, item) {
        if (err || !item) return callback(err || new Error('Orders not found'));
  
        item.updateAttributes(data, function(err, updatedItem) {
          if (err) return callback(err);
          callback(null, updatedItem);
        });
      });
    };
  
    // Method to delete a Orders item
    Orders.deleteOrders = function(id, callback) {
        Orders.deleteById(id, function(err) {
        if (err) return callback(err);
        callback(null);
      });
    };
  
    // Register the controller methods as remote methods
    Orders.remoteMethod('getAllOrders', {
      http: { path: '/getAllOrders', verb: 'get' },
      returns: { arg: 'orders', type: 'array' }
    });
  
    Orders.remoteMethod('createOrders', {
      http: { path: '/createOrders', verb: 'post' },
      accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
      returns: { arg: 'orders', type: 'object' }
    });

    Orders.remoteMethod('updateOrders', {
        http: { path: '/updateOrders', verb: 'put' },
        accepts: [
          { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
          { arg: 'data', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'orders', type: 'object' }
      });
    
      Orders.remoteMethod('deleteOrders', {
        http: { path: '/deleteOrders', verb: 'delete' },
        accepts: { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
        returns: { arg: 'success', type: 'boolean' }
      });
  };
  