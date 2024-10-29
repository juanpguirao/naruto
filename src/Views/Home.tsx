import React, { useState } from 'react'
import Header from '../components/Header'
import Imagen from '../components/Imagen' 
import Banner from '../img/banner.webp'

const Home = () => {
  const [searchInput, setsearchInput] = useState("");
  const handleSearchInput = (input:string)=>{
    setsearchInput(input);
  }

  return (
    <div className='relative'>
        <Header searchInput={handleSearchInput}/>
        <div className='relative'>
          <div className='absolute h-full w-full bg-black opacity-30' ></div>
          <h1 className='absolute h-full w-full text-white text-6xl font-semibold flex items-center justify-center font-Naruto'>Naruto Shipuden</h1>
          <img className='w-full' src={Banner} alt="" />
        </div>
        <Imagen searchCharacter={searchInput}/>
    </div>
  )
}

export default Home