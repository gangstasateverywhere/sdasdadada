import React from 'react'

const AgePopup = ({isOpen, onClose} : {isOpen:boolean , onClose:any}) => {
  if (!isOpen) return null;

  return (
    <div className=' w-screen h-screen bg-transparent flex justify-center items-center'>

    <div className="w-60 h-96  md:w-[400px] md:h-[600px] text-wrap bg-white flex flex-col gap-2" >
        <h1 className=' font-semibold md:font-bold md:text-4xl'>Bu videoyu izleyebilmek için 18 yaşından büyük olmanız gerekmektedir.</h1>
        <button className='text-xl py-4 md:text-3xl bg-green-400' onClick={onClose}>Evet 18 yaşından büyüğüm</button>
        <button className='text-sm md:text-base bg-red-400' onClick={()=>{
          window.location.href="https://www.google.com"
        }}>Hayır 18 yaşından büyük değilim</button>
    </div>
    </div>
  )
}

export default AgePopup