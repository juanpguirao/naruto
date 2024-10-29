import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../img/logoA.png'

interface Props {
  searchInput?: (input:string)=>void;
}
const Header = (props:Props) => {
  const navigate = useNavigate();
  return (
    <div className="h-16 bg-[#4691CC] flex  items-center border-[#082C8C] border-b-2 shadow sticky top-0 z-50">
      <div className="relative w-full ">
        <div className=" flex justify-between items-center px-4">
          <div className="">
            <button onClick={()=>{navigate("/")}} className="flex items-center">
              <div className="">
                <img className='h-8' src={logo} alt="" />
              </div>
              <div className="ml-2">
                <h1 className="text-xl font-Naruto text-white">Naruto Usumaki</h1>
              </div>
            </button>
          </div>
          {/* barra de busqueda */}
          {props.searchInput && <div className="bg-white items-center ml-auto border rounded-xl">
              <input onChange={(e)=>{if(props.searchInput)props.searchInput(e.target.value)}} className="pl-6 px-6 py-2 text-sm text-black rounded-xl font-Naruto" type="text" placeholder="Type to search..." />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header