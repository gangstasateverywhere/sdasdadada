import { connectToDatabase } from "../lib/db";
import { Kanal } from "../types/Kanal";

export interface VideosParams {
  id: number;
}

export interface getOneChannelProps {
  channel: Kanal;
}

export default async function getOneChannel(params: VideosParams): Promise<getOneChannelProps> {
  const connection = await connectToDatabase();
  const { id } = params;

  try {
    // Video listesini almak için sorgu
    const [results] = await connection.execute<any>(
      "SELECT * FROM kanal WHERE id = ? ", 
      [id.toString()]
    );

    // Eğer sonuç varsa, ilk elemanı al
    const channel = results.length > 0 ? results[0] : null;

    // Eğer kanal yoksa, hata fırlatabilirsin (isteğe bağlı)
    if (!channel) {
      throw new Error(`Kanal bulunamadı: ${id}`);
    }

    return { channel };
  } catch (error) {
    throw new Error(`Bir problem var: ${error}`);
  } finally {
    await connection.end();  // Bağlantıyı kapatma
  }
}
