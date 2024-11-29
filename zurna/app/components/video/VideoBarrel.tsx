import React from 'react'
import  { GetVideosResult} from '@/app/actions/getVideos';
import VideoItem from './VideoItem';
import Pagination from '../pagination/Pagination';

const VideoBarrel:React.FC<GetVideosResult> = async ({videos,count}) => {

   return (
    <section>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:px-10 xl:grid-cols-3'>
      
      {videos.map((video, index) => (
        <div className=' w-full mx-auto border-b-2' key={index}>
          <VideoItem video={video} />
        </div>
      ))}    
      </div>
      <div className='flex justify-center'>

      <Pagination totalcount={count} />
      </div>
      </section>

  ) 
}

export default VideoBarrel