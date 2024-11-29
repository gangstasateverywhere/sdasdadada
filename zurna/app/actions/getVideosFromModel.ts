import { connectToDatabase } from "../lib/db";
import { Video } from "../types/Video";

export interface VideosParams {
  page?: number | null
  id?: number | null
}

export interface GetVideosResult {
  videos: Video[];
  count: number;
}

export default async function getVideosFromModel(params: VideosParams): Promise<GetVideosResult> {
  const connection = await connectToDatabase();
  const limit: number = 18;
  const { id , page } = params;
  const modelId : number = id ?? 1;
  const currentPage: number = page ?? 1;
  const offset = (currentPage - 1) * limit;  

  try {
    // Video listesini almak için sorgu
    const [videos] = await connection.execute<any>(
      "SELECT v.* FROM video v JOIN video_model vm ON vm.video_id = v.id WHERE vm.model_id = ? LIMIT ? OFFSET ?", 
      [modelId.toString(), limit.toString(), offset.toString()]
    );

    // Toplam video sayısını almak için sorgu
    const [countRows] = await connection.execute<any>(
      "SELECT COUNT(*) as total FROM video v JOIN video_model vm ON vm.video_id = v.id WHERE vm.model_id = ?", 
      [modelId.toString()]
    );

    const count = countRows[0]?.total || 0;

    return { videos, count };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);

  } finally {
    await connection.end();  // Bağlantıyı kapatma
  }
}
