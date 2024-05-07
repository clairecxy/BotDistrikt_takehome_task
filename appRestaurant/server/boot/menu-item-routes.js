module.exports = function(app) {
    const MenuItem = app.models.Menuitem;
  
    // Define routes for Menu Items
    app.get('/api/menu-items', function(req, res) {
      MenuItem.find({}, function(err, menuItems) {
        if (err) return res.status(500).send(err);
        res.json(menuItems);
      });
    });
  
    app.post('/api/menu-items', function(req, res) {
      MenuItem.create(req.body, function(err, menuItem) {
        if (err) return res.status(500).send(err);
        res.json(menuItem);
      });
    });
  
    // Define routes for individual Menu Items
    app.get('/api/menu-items/:id', function(req, res) {
      MenuItem.findById(req.params.id, function(err, menuItem) {
        if (err) return res.status(500).send(err);
        res.json(menuItem);
      });
    });
  
    app.put('/api/menu-items/:id', function(req, res) {
      MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, menuItem) {
        if (err) return res.status(500).send(err);
        res.json(menuItem);
      });
    });
  
    app.delete('/api/menu-items/:id', function(req, res) {
      MenuItem.findByIdAndRemove(req.params.id, function(err) {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
      });
    });
  };
  