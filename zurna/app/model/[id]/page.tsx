import React, { Suspense, lazy } from 'react';
import getVideosFromModel from '@/app/actions/getVideosFromModel';

const VideoBarrel = lazy(() => import('@/app/components/video/VideoBarrel'));

type DetailProps = {
  id: number;
};



const page = async ({ params }: { params: DetailProps }) => {
  const modelId = parseInt(params.id as unknown as string, 10);
  const modelVideos = await getVideosFromModel({ id: modelId });

  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <VideoBarrel videos={modelVideos.videos} count={modelVideos.count} />
    </Suspense>
  );
};

export default page;
