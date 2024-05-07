module.exports = function(app) {
    const Orders = app.models.Orders;
  
    // Define routes for Order Items
    app.get('/api/orders', function(req, res) {
      Orders.find({}, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.post('/api/orders', function(req, res) {
      Orders.create(req.body, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    // Define routes for individual Order Items
    app.get('/api/orders/:id', function(req, res) {
      Orders.findById(req.params.id, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.put('/api/orders/:id', function(req, res) {
      Orders.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.delete('/api/orders/:id', function(req, res) {
      Orders.findByIdAndRemove(req.params.id, function(err) {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
      });
    });
  };
  