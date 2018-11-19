var mysql = require('mysql');



	// DB is local on localhost
	var connection = mysql.createConnection({
		port: 3306,
		host: 'kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'	,
		user: 'p34sfrpw64jox535',
		password: 't1rz28133ef7hvqf',
		database: 'lool3mgfdor8vd1z'
	});


	// var connection = mysql.createConnection({
	// 	host: "localhost",
	// 	port: 3306,
	// 	user: "root",
	// 	password: "password",
	// 	database: "burgers_db"
	// });

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