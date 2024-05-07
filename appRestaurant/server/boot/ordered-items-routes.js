module.exports = function(app) {
    const Ordereditems = app.models.Ordereditems;
  
    // Define routes for OrderedItems Items
    app.get('/api/orderedItems', function(req, res) {
        Ordereditems.find({}, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.post('/api/orderedItems', function(req, res) {
        Ordereditems.create(req.body, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    // Define routes for individual OrderedItems Items
    app.get('/api/orderedItems/:id', function(req, res) {
        Ordereditems.findById(req.params.id, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.put('/api/orderedItems/:id', function(req, res) {
        Ordereditems.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, items) {
        if (err) return res.status(500).send(err);
        res.json(items);
      });
    });
  
    app.delete('/api/orderedItems/:id', function(req, res) {
        Ordereditems.findByIdAndRemove(req.params.id, function(err) {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
      });
    });
  };
  