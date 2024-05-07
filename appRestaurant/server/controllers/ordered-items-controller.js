module.exports = function(Ordereditems) {
    // Method to retrieve all ordered-items items
    Ordereditems.getAllOrdereditems = function(callback) {
        Ordereditems.find({}, function(err, item) {
        if (err) return callback(err);
        callback(null, item);
      });
    };
  
    // Method to create a new ordered-items item
    Ordereditems.createOrdereditems = function(data, callback) {
        Ordereditems.create(data, function(err, newItem) {
        if (err) return callback(err);
        callback(null, newItem);
      });
    };

    // Method to update a Ordereditems item
    Ordereditems.updateOrdereditems = function(id, data, callback) {
      Ordereditems.findById(id, function(err, item) {
      if (err || !item) return callback(err || new Error('Ordereditems item not found'));

      item.updateAttributes(data, function(err, updatedItem) {
        if (err) return callback(err);
        callback(null, updatedItem);
      });
    });
  };

  // Method to delete a Ordereditems item
  Ordereditems.deleteOrdereditemsItem = function(id, callback) {
    Ordereditems.deleteById(id, function(err) {
      if (err) return callback(err);
      callback(null);
    });
  };
  
    // Register the controller methods as remote methods
    Ordereditems.remoteMethod('getAllOrdereditems', {
      http: { path: '/getAllOrdereditems', verb: 'get' },
      returns: { arg: 'ordereditems', type: 'array' }
    });
  
    Ordereditems.remoteMethod('createOrdereditems', {
      http: { path: '/createOrdereditems', verb: 'post' },
      accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
      returns: { arg: 'ordereditems', type: 'object' }
    });

    Ordereditems.remoteMethod('updateOrdereditems', {
      http: { path: '/updateOrdereditems', verb: 'put' },
      accepts: [
        { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
        { arg: 'data', type: 'object', http: { source: 'body' } }
      ],
      returns: { arg: 'ordereditems', type: 'object' }
    });
  
    Ordereditems.remoteMethod('deleteOrdereditems', {
      http: { path: '/deleteOrdereditems', verb: 'delete' },
      accepts: { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
      returns: { arg: 'success', type: 'boolean' }
    });
  };
  