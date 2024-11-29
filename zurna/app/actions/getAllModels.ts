import { connectToDatabase } from "../lib/db";
import { Model } from "../types/Model";
import { prop } from "./getAllChannels";
export type prop3={
  models:Model[]
  count:number
  }
export default async function getAllModels(params: prop): Promise<prop3> {
  const connection = await connectToDatabase();
  const { page, specialLimit } = params;
  const limit:number = specialLimit ?? 18;
  
  const currentPage: number = page ?? 1;
  
  const offset = (currentPage - 1) * limit;  
  try {
    const [models] = await connection.execute<any>(
      "SELECT * FROM model LIMIT ? OFFSET ?", 
      [limit.toString(), offset.toString()] 

    );
    const [countRows] = await connection.execute<any>(
      "SELECT COUNT(*) as total FROM kanal", 
      
    );
    const count = countRows[0].total;

    return { models, count };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);
  } finally {
    await connection.end();  
  }
}