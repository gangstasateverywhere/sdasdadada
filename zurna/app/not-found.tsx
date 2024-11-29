import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className=' text-blue-500  text-4xl'>Dostum burada hiçbir şey yok</h1>
      <h1 className=' text-blue-500  text-2xl'>Sinek avlıyoruz</h1>
      <Link href="/" className=' text-green-800 text-2xl underline mt-16'>
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;
