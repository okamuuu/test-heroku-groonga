nroonga = require('nroonga')

db = new nroonga.Database()

db.command('status', function(error, data) {
  console.log(data);
});
