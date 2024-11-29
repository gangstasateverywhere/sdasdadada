import { connectToDatabase } from "../lib/db";


export default async function getAllV(): Promise<any> {
  const connection = await connectToDatabase();
  try {
    const [videos] = await connection.execute<any>(
      "SELECT * FROM video", 
    );


    return videos;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    await connection.end();  // Bağlantıyı kapatma
  }
}