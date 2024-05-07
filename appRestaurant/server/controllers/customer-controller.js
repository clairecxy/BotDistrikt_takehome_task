module.exports = function(Customer) {
    // Method to retrieve all Customer items
    Customer.getAllCustomers = function(callback) {
        Customer.find({}, function(err, item) {
        if (err) return callback(err);
        callback(null, item);
      });
    };
  
    // Method to create a new Customer item
    Customer.createCustomer = function(data, callback) {
        Customer.create(data, function(err, newItem) {
        if (err) return callback(err);
        callback(null, newItem);
      });
    };

    // Method to update a Customer item
    Customer.updateCustomer = function(id, data, callback) {
      Customer.findById(id, function(err, item) {
      if (err || !item) return callback(err || new Error('Customer not found'));

      item.updateAttributes(data, function(err, updatedItem) {
        if (err) return callback(err);
        callback(null, updatedItem);
      });
    });
  };

  // Method to delete a Customer item
  Customer.deleteCustomer = function(id, callback) {
    Customer.deleteById(id, function(err) {
      if (err) return callback(err);
      callback(null);
    });
  };
  
    // Register the controller methods as remote methods
    Customer.remoteMethod('getAllCustomers', {
      http: { path: '/getAllCustomers', verb: 'get' },
      returns: { arg: 'customer', type: 'array' }
    });
  
    Customer.remoteMethod('createCustomer', {
      http: { path: '/createCustomer', verb: 'post' },
      accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
      returns: { arg: 'customer', type: 'object' }
    });

    Customer.remoteMethod('updateCustomer', {
      http: { path: '/updateCustomer', verb: 'put' },
      accepts: [
        { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
        { arg: 'data', type: 'object', http: { source: 'body' } }
      ],
      returns: { arg: 'customer', type: 'object' }
    });
  
    Customer.remoteMethod('deleteCustomer', {
      http: { path: '/deleteCustomer', verb: 'delete' },
      accepts: { arg: 'id', type: 'string', required: true, http: { source: 'path' } },
      returns: { arg: 'success', type: 'boolean' }
    });
  };
  