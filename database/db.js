var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grubTrackr', {useNewUrlParser: true});

var db = mongoose.connection;

var grubSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  category: String,
  expiration: String,
  location: String
});

var Grub = mongoose.model('Grub', grubSchema);


module.exports = {
  save: (grub, callback) => {
    console.log(grub);
    var record = new Grub ({
      item: grub.item,
      quantity: grub.quantity,
      category: grub.category,
      expiration: grub.expiration,
      location: grub.location
    });

    record.save(function (err, record) {
      if (err) {
        console.log('save error');
        callback(err);
      } else {
        console.log('save success');
        callback(null, record);
      }
    })
  },
  findBy: (location, callback) => {
    Grub.find({ location: location }, function (err, grubs) {
      if (err) {
        console.log('findBy error');
        callback(err);
      } else {
        console.log('findBy success');
        callback(null, grubs);
      }
    })
  }
}