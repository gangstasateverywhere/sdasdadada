import { connectToDatabase } from "../lib/db";
import { Model } from "../types/Model";

export interface ModelsParams {
  videoId: number;
}

export interface GetModelsResult {
  models: Model[];
}

export default async function getModelsFromVideo(params: ModelsParams): Promise<GetModelsResult> {
  const connection = await connectToDatabase();
  const { videoId } = params;

  try {
    // Videoda oynayan bütün modelleri almak için sorgu
    const [models] = await connection.execute<any>(
      `SELECT m.id, m.isim, m.resim, m.aciklama
       FROM model m
       JOIN video_model vm ON m.id = vm.model_id
       WHERE vm.video_id = ?`,
      [videoId.toString()]
    );

    return { models };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);

  } finally {
    await connection.end();  // Bağlantıyı kapatma
  }
}
