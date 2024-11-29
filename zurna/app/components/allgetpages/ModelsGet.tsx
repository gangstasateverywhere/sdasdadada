import React from 'react'
import Pagination from '../pagination/Pagination';
import Link from 'next/link';
import { prop3 } from '@/app/actions/getAllModels';
import Image from 'next/image';

const ModelsGet:React.FC<prop3> = async ({models,count}) => {

   return (
    <div>
    <div className='grid grid-cols-4 lg:grid-cols-6 gap-2 md:px-10 xl:grid-cols-8'>
      
      {models.map((model, index) => (
        <Link href={`/model/${model.id}`} className=' w-full aspect-special  bg-black border-b-2 ' key={index}>

        <div className=' relative bg-black w-full'>
          <Image fill alt='model' src={model.resim} className=' absolute inset-0 w-full h-full object-cover bg-red-400 ' />
        </div>
        <div className='px-5 relative'>
          <h1 className=' text-2xl'>{model.isim}</h1>
  
          <div className='text-center'><button>Modele git</button></div>
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

export default ModelsGet