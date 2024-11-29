import React, { Suspense, lazy } from 'react';
import getAllModels from '../actions/getAllModels';

const ModelsGet = lazy(() => import('@/app//components/allgetpages/ModelsGet'));

const page = async ({ searchParams }: { searchParams: { page?: number } }) => {
  const {page } = searchParams
  const ModelIdVideos = await getAllModels({page:page });



  return (
    <Suspense fallback={<div>Loading videos...</div>}>
      <ModelsGet models={ModelIdVideos.models} count={ModelIdVideos.count} />
    </Suspense>
  );
};

export default page;
