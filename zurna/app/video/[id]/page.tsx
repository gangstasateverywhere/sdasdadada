import getModelsFromVideo, { GetModelsResult } from "@/app/actions/getModelsFromVideo";
import getOneChannel from "@/app/actions/getOneChannel";
import getOneVideo from "@/app/actions/GetOneVideo";
import getVideos from "@/app/actions/getVideos";
import updateVideoViews from "@/app/actions/updateVideoViews";
import { Model } from "@/app/types/Model";
import { Video } from "@/app/types/Video";
import { Metadata } from "next";
import { Suspense, lazy } from 'react';

type DetailProps = {
  id: number;
};

const VideoComponent = lazy(() => import('@/app/components/video/id/VideoComponent'));

export async function generateMetadata({ params }: { params: DetailProps }): Promise<Metadata> {
  const videoId = parseInt(params.id as unknown as string, 10);
  const video: Video | null = await getOneVideo({ id: videoId });

  if (!video) {
    return {
      title: "Video Bulunamadı",
      description: "Bu video bulunamadı.",
    };
  }

  return {
    title: video.isim || "Başlıksız Video",
    description: video.aciklama || "Açıklama mevcut değil",
    openGraph: {
      images: [{ url: video.resim || "/default-image.jpg" }],
    },
  };
}


const page = async ({ params }: { params: DetailProps }) => {
  const videoId = parseInt(params.id as unknown as string, 10);
  const video:Video = await getOneVideo({ id: videoId });
  const videoModelsResult: GetModelsResult = await getModelsFromVideo({ videoId });
  const videoModels: Model[] = videoModelsResult.models;
  const recommendedVideosResult: any = await getVideos({ specialLimit: 4 });
  

  let kanalResult;
  if (video && video.kanal_id) {
    kanalResult = await getOneChannel({ id: video.kanal_id });
  }
  const kanal = kanalResult?.channel;

  await updateVideoViews({ id: videoId });

  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <VideoComponent video={video} model={videoModels} kanal={kanal} recommendedVideos={recommendedVideosResult.videos} />
    </Suspense>
  );
}

export default page;
