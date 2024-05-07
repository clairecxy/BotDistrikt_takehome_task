module.exports = function(Menuitem) {
    // Method to retrieve all menu items
    Menuitem.getAllMenuItems = function(callback) {
        Menuitem.find({}, function(err, menuItems) {
        if (err) return callback(err);
        callback(null, menuItems);
      });
    };
  
    // Method to create a new menu item
    Menuitem.createMenuItem = function(data, callback) {
        Menuitem.create(data, function(err, newItem) {
        if (err) return callback(err);
        callback(null, newItem);
      });
    };

  // Method to update a menu item
    Menuitem.updateMenuItem = function(id, data, callback) {
      Menuitem.findById(id, function(err, menuItem) {
      if (err || !menuItem) return callback(err || new Error('Menu item not found'));

      menuItem.updateAttributes(data, function(err, updatedItem) {
        if (err) return callback(err);
        callback(null, updatedItem);
      });
    });
  };

  // Method to delete a menu item
  Menuitem.deleteMenuItem = function(id, callback) {
    Menuitem.deleteById(id, function(err) {
      if (err) return callback(err);
      callback(null);
    });
  };
  
    // Register the controller methods as remote methods
    Menuitem.remoteMethod('getAllMenuItems', {
      http: { path: '/getAllMenuItems', verb: 'get' },
      returns: { arg: 'menuItems', type: 'array' }
    });
  
    Menuitem.remoteMethod('createMenuItem', {
      http: { path: '/createMenuItem', verb: 'post' },
      accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
      returns: { arg: 'menuItem', type: 'object' }
    });

    Menuitem.remoteMethod('updateMenuItem', {
      http: { path: '/updateMenuItem', verb: 'put' },
      accepts: [
        { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
        { arg: 'data', type: 'object', http: { source: 'body' } }
      ],
      returns: { arg: 'menuItem', type: 'object' }
    });
  
    Menuitem.remoteMethod('deleteMenuItem', {
      http: { path: '/deleteMenuItem', verb: 'delete' },
      accepts: { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
      returns: { arg: 'success', type: 'boolean' }
    });
  };
  