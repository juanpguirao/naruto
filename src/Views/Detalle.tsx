import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterCard } from '../components/Charactercard';
import { CharacterData } from '../types/CharacterTypes';



const Detalle = () => {
  const [character, setCharacter] = useState<CharacterData>();
  const { id } = useParams();
  const [imgNumber, setImgNumber] = useState(0);

  const getData = async () => {
    const result = await fetch('https://narutodb.xyz/api/character/' + id);
    const data = await result.json();
    setCharacter(data);
  }
  useEffect(() => {
    getData()
  }, [id])

  const navigate = useNavigate();

  const Badge = (name: string, color?:string) => {
    const c = color ? color : "3CB371"
    return <span className={`bg-orange-100 text-[#${c}] text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-[#${c}]`}>{name}</span>
  }

  interface Props { data: CharacterData }

  const titleClases = "text-[#1E90FF] text-white py-2 font-bold text-xl";
  

  const Card = ({ data }: Props) => {
    return <>
      <div className='flex flex-col justify-center border-4 border-[#E7E419] border-opacity-25 shadow-lg bg-[#F66C2D] rounded-xl min-w-[25rem] max-w-[30rem] w-full space-y-4'>
        <div>
          <h1 className='font-Naruto text-white  text-4xl text-center py-8'>
            {data.name}
          </h1>
        </div>
        <div className='flex flex-row items-center justify-center py-2 bg-[#F66C2D] rounded-xl px-1 shadow-orange-500 shadow-md'>
          <div className='w-[10%]'>
            {imgNumber != 0 && <button onClick={() => { setImgNumber(imgNumber - 1) }} className='flex items-end  font-semibold border-[#fd9565] border-[0.2rem] bg-[#f78754] rounded-xl py-1 px-3'>⟪</button>}
          </div>
          <div className='flex w-full border border-[#4691CC]] rounded-xl justify-center'>
            {data.images && <img className='rounded-xl h-full w-full ' src={data.images[imgNumber]} alt="" />}
          </div>
          <div className='w-[10%]'>
            {imgNumber < data.images.length - 1 && <button onClick={() => { setImgNumber(imgNumber + 1) }} className='flex items-end ml-auto font-semibold border-[#fd9565] border-[0.2rem] bg-[#f78754] rounded-xl py-1 px-3'>⟫</button>}
          </div>
        </div>

        <div className='border-[#F66C2D] rounded-lg border-2 p-2'>
          {data.jutsu && <div>
            <h2 className={titleClases}>
              Jutsu
            </h2>
            <div className="flex flex-wrap gap-1 ">
              {data.jutsu.map((j, n) => { if (n < 10) return Badge(j) })}
            </div>
          </div>}
          {data.natureType && <div>
            <h2 className={titleClases}>
              NaturaType
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.natureType.map((type) => { return Badge(type,"1E90FF") })}
            </div>
          </div>}
          {data.voiceActors && <div>
            <h2 className={titleClases}>
              Voice Actor
            </h2>
            <div className="flex flex-wrap gap-1">
              {data.voiceActors.english && Badge(data.voiceActors.english,"2F4F4F")}
              {data.voiceActors.japanese && Badge(data.voiceActors.japanese,"8B4513")}
            </div>
          </div>}
        </div>
      </div>
    </>
  }

  return (<div className=''>
    <Header />
    <div className='bg-naruto bg-[#4691CC] bg-cover  flex flex-col items-start justify-start min-h-[calc(100vh-4rem)]'>
      <div className=' flex w-full px-5 py-2'>
        {Number(id) > 1 && <button onClick={() => navigate(`/character/${Number(id) - 1}`)} className='mr-auto flex items-start font-semibold border-[#fd9565] border-[0.2rem] bg-[#F66C2D] rounded-xl py-1 px-4 shadow-lg'>Back</button>}
        <button onClick={() => navigate(`/character/${Number(id) + 1}`)} className='ml-auto flex items-end  font-semibold border-[#fd9565] border-[0.2rem] bg-[#F66C2D] rounded-xl py-1 px-4 shadow-lg'>Next</button>
      </div>
      <div className='flex w-full items-center justify-center h-full px-5 py-2'>
        {character && <Card data={character} />}
      </div>
    </div>
  </div>
  )
}

export default Detalle


// Onyx (#363641) - Un color oscuro y profundo.

// Vivid Tangelo (#F66C2D) - Un vibrante tono naranja.

// Dandelion (#E7E419) - Un amarillo brillante.

// Alabaster (#F0EBDF) - Un blanco suave.

// Celestial Blue (#4691CC) - Un azul claro y reluciente.

// USAF Air Force Blue (#082C8C) - Un azul oscuro y profundo.