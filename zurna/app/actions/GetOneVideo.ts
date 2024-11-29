import { connectToDatabase } from "../lib/db";

export interface VideoParams {
    id: number;
  }

export default async function getOneVideo(params: VideoParams) {
    const connection = await connectToDatabase();
    const {  id } = params;

    try {
        // Sorgu parametrelerini doğrudan sorgu dizesine ekleyin
        const [videos] = await connection.execute<any>(
          "SELECT * FROM video WHERE id = ?", 
         [id]
        );
        return videos[0];
      } catch (error) {
        throw new Error(`Is There a problem: ${error}`);

      } finally {
        await connection.end();  // Bağlantıyı kapatma
      }


}
