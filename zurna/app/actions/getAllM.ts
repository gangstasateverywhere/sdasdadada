import { connectToDatabase } from "../lib/db";


export default async function getAllM(): Promise<any> {
  const connection = await connectToDatabase();
  try {
    const [models] = await connection.execute<any>(
      "SELECT * FROM model", 
    );


    return models;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    await connection.end();
  }
}