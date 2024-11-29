import { connectToDatabase } from "../lib/db";
import { Video } from "../types/Video";

export interface VideosParams {
  page?: number | null;
  query?: string | null
  specialLimit?:number
}

export interface GetVideosResult {
  videos: Video[];
  count: number;
}

export default async function getVideos(params: VideosParams): Promise<GetVideosResult> {
  const connection = await connectToDatabase();
  const { query, page, specialLimit } = params;
  const limit:number = specialLimit ?? 18;
  
  const searchParameter = query ?? "";
  const currentPage: number = page ?? 1;
  
  const offset = (currentPage - 1) * limit;  

  try {
    const [videos] = await connection.execute<any>(
      "SELECT * FROM video WHERE isim LIKE ? LIMIT ? OFFSET ?", 
      [`%${searchParameter}%`, limit.toString(), offset.toString()]
    );

    const [countRows] = await connection.execute<any>(
      "SELECT COUNT(*) as total FROM video WHERE isim LIKE ?", 
      [`%${searchParameter}%`]
    );

    const count = countRows[0].total;

    return { videos, count };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);

  } finally {
    await connection.end();  
  }
}