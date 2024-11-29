import { Video } from "@/app/types/Video";
import React from "react";

import Link from "next/link";
import Pagination from "../pagination/Pagination";
import { categories } from "@/utils/Categories";
import VideoItem from "../video/VideoItem";


interface HomeProps {
  videos: Video[] | null
  count: number 
}


const Home: React.FC<HomeProps> = ({ videos, count }) => {
  if (!videos) {
    return (
      <div>
Video yok      
</div>
    )
  }

  return (
    <div className=" w-full" >

      <div>
        <div>
          <div className=" bg-slate-600  hidden md:flex justify-center items-center text-white w-full h-64 md:h-96">
            lansman video
          </div>
          <main className=" w-full flex   relative  ">
            <div className="flex-1 relative ">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative gap-2 z-10">
                {videos.map((video, index) => (
                  <VideoItem video={video}  key={index} />
                ))}
              </div>
            </div>
            <aside>

            <ul className=" bg-slate-300 hidden md:w-[200px] lg:w-[400px] relative  md:grid grid-cols-2 list-disc  ">

              {categories.map((e, i) => (
                
                <li className="w-fit ml-6" key={i}>

                  <Link href={`/category/${e.id}`} className="flex justify-center h-fit min-h-10">{e.name}</Link>
                </li>

))}
            </ul>
</aside>
          </main>
        </div>
        <div className=" flex justify-center"><Pagination totalcount={count} /></div>
      </div>
    </div>
  );
}

export default Home