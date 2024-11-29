import { connectToDatabase } from "../lib/db";


export default async function getAllK(): Promise<any> {
  const connection = await connectToDatabase();
  try {
    const [kanals] = await connection.execute<any>(
      "SELECT * FROM kanal", 
    );


    return kanals;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    await connection.end();  
  }
}