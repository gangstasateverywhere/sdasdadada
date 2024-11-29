import React from 'react'
import getVideos, { GetVideosResult } from '../actions/getVideos';
import VideoItem from '../components/video/VideoItem';
import Pagination from '../components/pagination/Pagination';

const page = async ({ searchParams }: { searchParams: { query?: string, page?: number } }) => {
  const searchQuery = searchParams.query ?? null
  const currentPage = searchParams.page ?? 1
  const data: GetVideosResult = await getVideos({ query: searchQuery, page: currentPage })
  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:px-10 xl:grid-cols-3'>
      
      {data.videos.map((e, i) => (
        <div className=' w-full mx-auto border-b-2' key={i}>
          <VideoItem video={e} />
        </div>
      ))}    
      </div>
      <div className='flex justify-center'>

      <Pagination totalcount={data.count} />
      </div>
      </div>

  )
}

export default page