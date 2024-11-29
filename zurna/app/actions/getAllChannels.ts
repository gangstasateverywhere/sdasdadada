import { connectToDatabase } from "@/app/lib/db";
import { Kanal } from "../types/Kanal";

export type prop = {
  page?: number | null;
  specialLimit?:number
}
export type prop2={
kanals:Kanal[]
count:number
}

export default async function getAllChannels(params: prop): Promise<prop2> {
  const connection = await connectToDatabase();
  const { page, specialLimit } = params;
  const limit:number = specialLimit ?? 18;
  
  const currentPage: number = page ?? 1;
  
  const offset = (currentPage - 1) * limit;  
  try {
    const [kanals] = await connection.execute<any>(
      "SELECT * FROM kanal LIMIT ? OFFSET ?",
      [limit.toString(), offset.toString()] 
    );
    const [countRows] = await connection.execute<any>(
      "SELECT COUNT(*) as total FROM kanal", 
      
    );
    const count = countRows[0].total;

    return { kanals, count };
  } catch (error) {
    throw new Error(`Is There a problem: ${error}`);
  } finally {
    await connection.end();  
  }
}







