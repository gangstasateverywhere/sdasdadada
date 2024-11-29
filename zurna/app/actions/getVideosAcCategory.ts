import { connectToDatabase } from "../lib/db";
import { Video } from "../types/Video";

export interface VideosParams {
  page?: number | null;
  categoryId: number; 
}

export interface GetVideosResult {
  videos: Video[]; 
  count: number;
}

export default async function getVideosAcCategory(params: VideosParams): Promise<GetVideosResult> {
  const connection = await connectToDatabase();
  const limit: number = 18;
  const { page, categoryId } = params;
  const currentPage: number = page ?? 1;
  const offset = (currentPage - 1) * limit;

  try {
    const [videos] = await connection.execute<any>(
      `
        SELECT v.*
        FROM video v
        JOIN video_kategori vk ON vk.video_id = v.id
        WHERE vk.kategori_id = ?

      LIMIT ? OFFSET ?
      `,
      [categoryId.toString(), limit.toString(), offset.toString()]
    );

    const [countRows] = await connection.execute<any>(
      `
      SELECT COUNT(*) as total
      FROM video v
      JOIN video_kategori vk ON vk.video_id = v.id
      WHERE vk.kategori_id = ?

      `,
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
