const db = require('../database/db.js');

module.exports = {
  addGrub: (req, res) => {
    db.save(req.body, (err, record) => {
      if (err) {
        console.log('addGrub error');
        res.status(500).end();
      } else {
        console.log('addGrub success');
        res.status(201).end();
      }
    })
  },
  getGrubs: (req, res) => {
    db.findBy(req.body, (err, grubs) => {
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