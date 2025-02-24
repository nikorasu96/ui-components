import mysql from 'mysql2/promise';

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'my_database',
  });
  return connection;
}
