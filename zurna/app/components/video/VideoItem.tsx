import { Video } from '@/app/types/Video'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type prop = {
    video:Video
}

const VideoItem: React.FC<prop> = ({ video }) => {

  return (
    <Link href={`/video/${video.id}`} className=" w-full  bg-gray-500">
      <div className=' aspect-video relative bg-black'>
        <Image fill  alt='porno'  src={video.resim} className=' absolute inset-0 w-full h-full object-cover bg-red-400 ' />
      </div>
      <div className='px-5 relative'>
        <h1 className=' text-2xl'>{video.isim}</h1>
        <div className='flex justify-between flex-wrap' ><div>{video.izlenmeSayisi} Görüntülenme</div>
</div>
        <div className='text-center'><button>hemen izle</button></div>
      </div>
    </Link>
  )
}

export default VideoItem