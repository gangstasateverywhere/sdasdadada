import { Suspense, lazy } from 'react';
import getVideos from './actions/getVideos';

// Dinamik olarak içe aktar
const Home = lazy(() => import('./components/home/Home'));

export default async function page({ searchParams }: { searchParams: { page?: number } }) {
  const currentPage = searchParams.page ?? 1;
  const { videos, count } = await getVideos({ page: currentPage });
  const countNew = count ?? 0;

  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <Home videos={videos} count={countNew} />
    </Suspense>
  );
}
