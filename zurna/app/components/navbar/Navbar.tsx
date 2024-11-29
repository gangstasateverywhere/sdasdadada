import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { categories } from '@/utils/Categories'


const Navbar = () => {
  return (
    <nav>
    <div className=" w-full md:w-full bg-orange-500 h-16 items-center flex  justify-center md:justify-between px-5 md:px-14 " >
      <Link href="/" className=" hidden md:block">
        <h1 className='  font-bold text-3xl  text-black'>SEKSAPELS</h1>
      </Link>
      <div className=" md:w-[600px] flex justify-center mx-auto md:mx-0 relative rounded-lg">
        <SearchBar />
      </div>
      <div className='hidden md:block'></div>
    </div>
    <div className=" h-10 bg-black flex items-center md:justify-between *:text-slate-100  overflow-x-auto px-5 md:px-14 ">

      {
        categories.map((e,i)=>(
          <Link href={`/category/${e.id}`} key={i} className=" min-w-fit px-3">{e.name}</Link>
        ))
      }

      </div>
    </nav>
    )
}

export default Navbar