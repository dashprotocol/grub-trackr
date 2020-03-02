const db = require('../database/db.js');

module.exports = {
  addGrub: (req, res) => {
    db.save(req.body, (err, record) => {
      if (err) {
        console.log('addMovie error');
        res.status(500).end();
      } else {
        console.log('addMovie success');
        res.status(201).end();
      }
    })
  },
  getGrubs: (req, res) => {
    db.findBy((err, grubs) => {
      if (err) {
        console.log('getGrubs error: controller');
        res.status(500).end();
      } else {
        console.log('getGrubs success: controller');
        res.send(grubs).end();
      }
    })
  }
}