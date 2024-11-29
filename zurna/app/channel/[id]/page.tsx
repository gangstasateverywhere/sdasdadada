import React, { Suspense, lazy } from 'react';
import getVideosFromChannel from '@/app/actions/getVideosFromChannel';

const VideoBarrel = lazy(() => import('@/app/components/video/VideoBarrel'));

type DetailProps = {
  id: number;
};

const page = async ({ params }: { params: DetailProps }) => {
  const channelId = parseInt(params.id as unknown as string, 10);
  const channelVideos = await getVideosFromChannel({ id: channelId });

  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <VideoBarrel videos={channelVideos.videos} count={channelVideos.count} />
    </Suspense>
  );
};

export default page;
