module.exports = function(app) {
    const Customers = app.models.Customer;
  
    // Define routes for Customer Items
    app.get('/api/customers', function(req, res) {
        Customers.find({}, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.post('/api/customers', function(req, res) {
        Customers.create(req.body, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    // Define routes for individual Customer Items
    app.get('/api/customers/:id', function(req, res) {
        Customers.findById(req.params.id, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.put('/api/customers/:id', function(req, res) {
        Customers.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.delete('/api/customers/:id', function(req, res) {
        Customers.findByIdAndRemove(req.params.id, function(err) {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
      });
    });
  };
  