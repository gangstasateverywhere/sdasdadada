import { connectToDatabase } from "../lib/db";

export interface VideosParams {
  page?: number | null;
  query?: string | null
}

export interface GetChannelResult {
  channels: any;
  count: number;
}

export default async function getChannels(params: VideosParams): Promise<GetChannelResult> {
  const connection = await connectToDatabase();
  const limit: number = 18;
  const { query, page } = params;
  const searchParameter = query ?? "";
  const currentPage: number = page ?? 1;
  
  // Offset hesaplamasını düzelt
  const offset = (currentPage - 1) * limit;  

  try {
    // Video listesini almak için sorgu
    const [channels] = await connection.execute<any>(
      "SELECT * FROM kanal WHERE id = ? LIMIT ? OFFSET ?", 
      [`%${searchParameter}%`, limit.toString(), offset.toString()]
    );

    // Toplam video sayısını almak için sorgu
    const [countRows] = await connection.execute<any>(
      "SELECT COUNT(*) as total FROM kanal WHERE isim LIKE ?", 
      [`%${searchParameter}%`]
    );

    // 'countRows' dizisindeki ilk eleman, sayım sonucunu içerir
    const count = countRows[0].total;

    return { channels, count };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);

  } finally {
    await connection.end();  // Bağlantıyı kapatma
  }
}