import { connectToDatabase } from "../lib/db";

export interface UpdateViewsParams {
    id: number;
}

export default async function updateVideoViews(params: UpdateViewsParams) {
    const connection = await connectToDatabase();
    const { id } = params;

    try {
        // İzlenme sayısını 1 artıran sorgu
        await connection.execute(
            "UPDATE video SET izlenmeSayisi = izlenmeSayisi + 1 WHERE id = ?",
            [id]  // id'yi doğrudan kullan
        );

        return 1;
    } catch (error: any) {
        throw new Error(`Bir hata oluştu: ${error.message}`);
    } finally {
        await connection.end();  // Bağlantıyı kapatma
    }
}
