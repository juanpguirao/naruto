import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterCard } from './Charactercard';
import { CharacterData } from '../types/CharacterTypes';

interface Props {
  searchCharacter: string;
}

function Imagen(props: Props) {
  const [characters, setCharacters] = useState<CharacterData[]>();
  const navigate = useNavigate();
  const getData = async () => {
    const result = await fetch("https://narutodb.xyz/api/character?page=1&limit=10000");
    const data = await result.json();
    setCharacters(data.characters);
  }
  useEffect(() => {
    getData();
  }, [])

  const Imagen = (props: { character: CharacterData }) => {
    return <div onClick={() => navigate(`/character/${props.character.id}`)} className='m-3  flex overflow-hidden items-center h-40 max-h-40 w-40 max-w-44 border rounded-xl border-white bg-[#bd562e] relative '>
      <img src={props.character.images[0]} className='h-full w-full object-cover' alt="" />
      <p className='absolute bottom-2 left-2 text-white'>{props.character.name}</p>
    </div>
  }

  return (
    <div className='h-screen'>
      <div className='bg-orange-300 min-h-full'>
        <div className='h-full w-full flex flex-wrap gap-5 justify-center pt-3'>
          {characters?.filter((i) => i.name.toLowerCase()
            .includes(props.searchCharacter.toLowerCase()))
            .map((c) => {
              if (!c.images[0]) return;
              return <CharacterCard data={c} />
            })}
        </div>
      </div>
    </div>
  );
}

export default Imagen;
