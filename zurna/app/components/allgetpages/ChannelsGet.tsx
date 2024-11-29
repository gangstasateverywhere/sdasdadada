import React from 'react'
import Pagination from '../pagination/Pagination';
import { prop2 } from '@/app/actions/getAllChannels';
import Link from 'next/link';
import Image from 'next/image';

const ChannelsGet:React.FC<prop2> = async ({kanals,count}) => {

   return (
    <div>
    <div className='grid grid-cols-4 lg:grid-cols-6 gap-2 md:px-10 xl:grid-cols-8'>
      
      {kanals.map((kanal, index) => (
        <Link href={`/channel/${kanal.id}`} className=' w-full aspect-special  bg-black border-b-2' key={index}>


      <div className=' aspect-video relative bg-black'>
        <Image fill src={kanal.resim} alt='resim' className=' absolute inset-0 w-full h-full object-cover bg-red-400 ' />
      </div>
      <div className='px-5 relative'>
        <h1 className=' text-2xl'>{kanal.isim}</h1>

        <div className='text-center'><button>kanala git</button></div>
      </div>



        </Link>


      ))}    
      </div>
      <div className='flex justify-center'>

      <Pagination totalcount={count} />
      </div>
      </div>

  ) 
}

export default ChannelsGet