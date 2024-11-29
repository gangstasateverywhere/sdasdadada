import mysql, { Connection } from 'mysql2/promise';

// MySQL bağlantı ayarlarınızı burada belirleyin
const dbConfig = {
  host : process.env.MYHOST as string,
  user : process.env.MYUSER as string,
  password : process.env.MYPASSWORD as string,
  database : process.env.MYDATABASE as string,
  port : 21117,
};

export async function connectToDatabase(): Promise<Connection> {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

