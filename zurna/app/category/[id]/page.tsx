import getVideosAcCategory from '@/app/actions/getVideosAcCategory';
import VideoBarrel from '@/app/components/video/VideoBarrel';
import React from 'react'
type DetailProps = {
  id: number;
};
const page =async ({params}:{params:DetailProps}) => {
  const categoryId = parseInt(params.id as unknown as string, 10);
  const categories = await getVideosAcCategory({categoryId:categoryId})
  return (
    <div>
     <VideoBarrel videos={categories.videos} count={categories.count} />
    </div>
  )
}

export default page