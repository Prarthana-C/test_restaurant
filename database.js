import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
    host: "restaurant-db.cv4mo6wwwskp.eu-north-1.rds.amazonaws.com",
    user: "admin",
    password: "Parthu07$",
    database: "restaurant-db"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;