import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { CharacterCard } from '../components/Charactercard';


interface CharacterData {
  id: number;
  name: string;
  images: string;
  debut: {
    manga: string,
    anime: string,
    novel: string,
    movie: string,
    game: string,
    ova: string,
    appearsIn: string
  };
  family: {
    "incarnation with the god tree": string,
    "depowered form": string
  };
  jutsu: string[];
  natureType: string[];
  personal: {
    age: {
      "Part I": string,
      "Part II": string,
      "Academy Graduate": string,
      "Chunin Promotion": string
    }
    status: string,
    kekkeiGenkai: string,
    classification: string,
    jinchūriki: string[],
    titles: string[],
    height: {
      "Part I": string,
      "Part II": string,
      "Blank Period": string,
      "Gaiden": string,
    },
    "weight": {
      "Part I": string,
      "Part II": string,
    },
    "bloodType": string,
    "occupation": string[],
    "affiliation": string[],
    "team": string[],
    "clan": string,
  },
  tools: string[];
  voiceActors: {
    "japanese": string,
    "english": string[]
  }
}
const Detalle = () => {
  const [character, setCharacter] = useState<CharacterData>();
  const {id} = useParams();


  const getData = async () => {
    const result = await fetch('https://narutodb.xyz/api/character/'+id);
    const data = await result.json();
    setCharacter(data);
  }

  useEffect(() => {
    getData()
  }, [])

  interface Props { data: CharacterData }

  const titleClases = "underline py-2 text-center font-bold";

  const Card = ({ data }: Props) => {
    return <div className='flex flex-col items-center justify-center p-3 border rounded-lg min-w-[25rem] max-w-[35rem] w-full bg-white space-y-4'>
      <img className='pt-4 rounded min-h-64 ' src={data.images[0]} alt="" />
      <div>
        <h2 className={titleClases}>
          Nombre
        </h2>
        <p>
          {data.name}
        </p>
      </div>
      {data.debut && <div className='text-center'>
        <h2 className={titleClases}>
          Debut
        </h2>
        <div>
          <p>{data.debut.manga}</p>
          <p>{data.debut.movie}</p>
          <p>{data.debut.game}</p>
          <p>{data.debut.ova}</p>
          <p>{data.debut.appearsIn}</p>
        </div>
      </div>}
      {data.family && <div>
        <h2 className={titleClases}>
          Personal Details
        </h2>
        <p>{data.family['depowered form']}</p>
        <p>{data.family['incarnation with the god tree']}</p>
      </div>}
      {data.jutsu && <div>
        <h2 className={titleClases}>
          Family Details
        </h2>
   
      </div>}
      <div>
        <h2 className={titleClases}>
          NaturaType
        </h2>
        <p>

        </p>
      </div>
      <div>
        <h2 className={titleClases}>
        </h2>
        <p></p>
      </div>
      {data.jutsu && <div>
        <h2 className={titleClases}>
          Jutsu
        </h2>
        {data.jutsu.map((j) => { return <p>{j}</p> })}
      </div>}
      <div>
        <h2 className={titleClases}>
          Voice Actor
        </h2>
        <p>

        </p>
      </div>
    </div>
  }

  return (<div className=' min-h-screen'>
    <Header />
    <div className='py-12 flex flex-col flex-grow items-center justify-center'>
      {character && <CharacterCard data={character} />}
    </div>
  </div>
  )
}

export default Detalle