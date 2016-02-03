var pg = require('pg');

var conString = process.env.DATABASE_URL || "postgres://postgres:Welcome123@localhost:5432/postgres";

pg.connect(conString, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});