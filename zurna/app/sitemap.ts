import { MetadataRoute } from "next";
import { Video } from "./types/Video";
import { Kanal } from "./types/Kanal";
import { Model } from "./types/Model";
import getAllM from "./actions/getAllM";
import getAllK from "./actions/getAllK";
import getAllV from "./actions/getAllV";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

  const v: Video[] = await getAllV();
  const k:Kanal[]= await getAllK();
  const m: Model[] = await getAllM();

  const videoEntries: MetadataRoute.Sitemap = v.map(({ id }) => ({
    url: `${baseUrl}/video/${id}`,
  }));

  const channelEntries: MetadataRoute.Sitemap = k.map(({ id }) => ({
    url: `${baseUrl}/channel/${id}`,
  }));

  const modelEntries: MetadataRoute.Sitemap = m.map(({ id }) => ({
    url: `${baseUrl}/model/${id}`,
  }));

  return [
    {
      url: `${baseUrl}`,
    },
    {
      url:`${baseUrl}/models`
    },
    {
      url:`${baseUrl}/channels`
    },
    ...videoEntries,
    ...channelEntries,
    ...modelEntries,
  ];
}
