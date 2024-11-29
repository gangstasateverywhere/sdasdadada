import { connectToDatabase } from "../lib/db";

export default async function getAllVideos(): Promise<any> {
  const connection = await connectToDatabase();
  try {
    const [videos] = await connection.execute<any>(
      "SELECT id FROM video", 
    );


    return videos;
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);

  } finally {
    await connection.end();  // Bağlantıyı kapatma
  }
}