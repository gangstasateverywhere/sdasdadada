"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string | null>('');

  const submitHandler = (e:any)=>{
    e.preventDefault();
    if(!searchValue){
      return
    }
    router.push(`/search?query=${encodeURIComponent(searchValue)}`);

  }
  return (
    <form onSubmit={submitHandler} className='flex w-3/4 md:w-[600px] h-[50px] text-lg rounded-md  justify-center'>
      <input type='text' className=' pl-3 text-2xl outline-none rounded-md flex-1' placeholder='' onChange={(e)=>setSearchValue(e.target.value)}    />
      <button type='submit' title='search' className=' rounded-md w-fit'>
        <svg
        className='max-w-[50px]'
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path d="M21 3C11.621 3 4 10.621 4 20s7.621 17 17 17c3.71 0 7.14-1.195 9.938-3.219l13.156 13.125 2.812-2.812-13-13.032A16.923 16.923 0 0038 20c0-9.379-7.621-17-17-17zm0 2c8.297 0 15 6.703 15 15s-6.703 15-15 15S6 28.297 6 20 12.703 5 21 5z"></path>
        </svg>    </button>
    </form>
  )
}

export default SearchBar