import React, { Suspense, lazy } from 'react';
import getAllChannels from '../actions/getAllChannels';

const ChannelsGet = lazy(() => import('@/app/components/allgetpages/ChannelsGet'));


const page = async ({ searchParams }: { searchParams: { page?: number } }) => {
    const {page } = searchParams
    const channelVideos = await getAllChannels({ page:page});



  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <ChannelsGet kanals={channelVideos.kanals} count={channelVideos.count} />
    </Suspense>
  );
};

export default page;
