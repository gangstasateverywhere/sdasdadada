"use client";
import { Kanal } from '@/app/types/Kanal';
import { Model } from '@/app/types/Model';
import { Video } from '@/app/types/Video';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import VideoItem from '../VideoItem';
import AgePopup from '../../general/AgePopup';

interface VideoProp {
  video: Video;
  recommendedVideos: Video[]
  model: Model[] | null
  kanal: Kanal | undefined

}



const VideoComponent: React.FC<VideoProp> = ({ video, model, kanal, recommendedVideos }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (video && video.link) {
      setVideoUrl(video.link);
    }
    setIsModalOpen(true);
  }, [video]);

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {
        isModalOpen
          ?

          <AgePopup isOpen={isModalOpen} onClose={closeModal} />
          :
          <div className=' block md:flex  min-h-screen relative'>
            <section className=' relative flex-1 pl-4 md:pl-16  '>
              <div className='w-full px-5 '>
                <h1 className='font-bold text-4xl'>{video.isim}</h1>
                <h6></h6>
                <div className='w-full border-4 aspect-video flex justify-center'>




                  <video ref={videoRef} className='video-js'  id='my-video' controls preload='metadata' controlsList="nodownload">
                    {videoUrl ? (
                      <source src={videoUrl} type='video/mp4' />
                    ) : (
                      <p>Video yüklenemedi. Lütfen tekrar deneyin.</p>
                    )}
                  </video> 

                </div>

                {
                  kanal
                    ?

                    <div className='mb-5'>
                      <h2 className=' font-semibold text-2xl'>Kanal</h2>
                      <div>


                        <Link href={`/model/${kanal.id}`} className='flex items-center w-fit' >
                          <div className='w-[60px] h-[60px] bg-red-400 rounded-full mr-2'></div>
                          <h2 className=' border-2 p-2 rounded-3xl border-blue-400' >{kanal.isim}</h2>

                        </Link>


                      </div>
                    </div>
                    :
                    <></>
                }
                <div>
                  <h2 className=' font-semibold text-2xl'>Model(ler)</h2>
                  <div>

                    {
                      model
                        ?
                        model.map((e, i) => (
                          <Link href={`/model/${e.id}`} key={i} className='flex items-center w-fit' >
                            <div className='w-[60px] h-[60px] bg-red-400 rounded-full mr-2'></div>
                            <h2 className=' border-2 p-2 rounded-3xl border-blue-400' >{e.isim}</h2>

                          </Link>
                        ))
                        :
                        <></>
                    }
                  </div>
                </div>

              </div>
            </section>
            <div className='  w-full md:w-[200px] lg:w-[300px] h-full border min-h-screen md:sticky'>
              {
                recommendedVideos.map((e, i) => (
                  <div className=' w-full px-5 md:px-0' key={i}>
                    <VideoItem video={e} />
                  </div>
                ))


              }
            </div>
          </div>
      }
    </>
  );

}

export default VideoComponent;
