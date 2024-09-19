import React, { useState } from 'react'
import Header from '../components/Header'
import Imagen from '../components/Imagen' 

const Home = () => {
  const [searchInput, setsearchInput] = useState("");
  const handleSearchInput = (input:string)=>{
    setsearchInput(input);
  }

  return (
    <div className='relative'>
        <Header searchInput={handleSearchInput}/>
        <Imagen searchCharacter={searchInput}/>
    </div>
  )
}

export default Home