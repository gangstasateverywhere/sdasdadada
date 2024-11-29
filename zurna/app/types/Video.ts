export interface Video {
    id: number;
    isim: string;
    resim: string;
    aciklama:string;
    link: string;
    kanal_id?: number 
    izlenmeSayisi: number;
    kategori_id?:number
    model_id?:number
  }
  