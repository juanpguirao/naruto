import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../img/logoA.png'

interface Props {
  searchInput?: (input:string)=>void;
}
const Header = (props:Props) => {
  const navigate = useNavigate();
  return (
    <section className="py-5 px-6 bg-amber-100 shadow sticky top-0 z-50">
      <nav className="relative">
        <div className="flex items-center">
          <div className="">
            <button onClick={()=>{navigate("/")}} className="flex items-center">
              <div className="">
                <img className='h-8' src={logo} alt="" />
              </div>
              <div className="ml-2">
                <h1 className="text-xl text-orange-500">Naruto Usumaki</h1>
              </div>
            </button>
          </div>
          {/* barra de busqueda */}
          {props.searchInput && <div className="bg-white items-center ml-auto border rounded-xl">
              <input onChange={(e)=>{if(props.searchInput)props.searchInput(e.target.value)}} className="pl-2 py-1 text-sm text-gray-200 rounded-xl" type="text" placeholder="Type to search..." />
            </div>
          }
        </div>
      </nav>
    </section>
  )
}

export default Header