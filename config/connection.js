var mysql = require('mysql');



	// DB is local on localhost
	var connection = mysql.createConnection({
		port: 3306,
		host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: '	nxxv3iqopfi7qj15',
		password: 'amq8ng7o8uq0ysu0',
		database: 'ynfuc9jhap3k48x1'
	})


// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;