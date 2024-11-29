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

export default async function getVideosFromChannel(params: VideosParams): Promise<GetVideosResult> {
  const connection = await connectToDatabase();
  const limit: number = 18;
  const { id , page } = params;
  const categoryId : number = id ?? 1
  const currentPage: number = page ?? 1;
  
  const offset = (currentPage - 1) * limit;  

  try {
    const [videos] = await connection.execute<any>(
      "SELECT * FROM video WHERE kanal_id = ? LIMIT ? OFFSET ?", 
      [categoryId.toString(),limit.toString(), offset.toString()]
    );

    const [countRows] = await connection.execute<any>(
      "SELECT COUNT(*) as total FROM video WHERE kanal_id = ?", 
      [categoryId.toString()]
    );

    const count = countRows[0].total;

    return { videos, count };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);

  } finally {
    await connection.end();  
  }
}