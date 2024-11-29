"use client"
import React from 'react'
import PaginationComponent from '@mui/material/Pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props{
    totalcount:number | null
}
const Pagination:React.FC<Props> = ({totalcount}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  if(totalcount === null){
    totalcount = 0
  }
  const pagemath:number =(totalcount / 18);
  const totalpage = Math.trunc(pagemath) + 1

  const changeHandler = (event: React.ChangeEvent<unknown>, value: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', value.toString());
    router.push(`${pathname}?${newSearchParams.toString()}`);
  }
  return (
    <div className='h-12 mt-4  flex'>      
      <PaginationComponent count={totalpage} variant="outlined" shape="rounded" onChange={changeHandler} />
    </div>
  )
}

export default Pagination