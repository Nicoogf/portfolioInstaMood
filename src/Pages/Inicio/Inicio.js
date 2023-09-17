import React from 'react' ;
import { BsThreeDots } from "react-icons/bs" ;
import { AiOutlineHeart } from "react-icons/ai" ;
import { FaRegComment } from "react-icons/fa" ;
import { TbLocation } from "react-icons/tb" ;
import { BsSave } from "react-icons/bs"
import { BsFillPatchCheckFill } from "react-icons/bs" ;
import HistoriasContainer from "../../Components/HistoriasContainer"
import HistoriaAbierta from '../../Components/HistoriaAbierta';


export default function Inicio() {
  return (
    <div className='max-h-screen w-full md:7/12 lg:w-7/12 xl:6/12 bg-black h-[100vh] overflow-hidden'>

      <HistoriasContainer />

      <HistoriaAbierta />

      <div className="flex flex-col gap-y-8 overflow-y-auto h-[90vh] pb-40 xl:w-7/12 mx-auto">

        <div className="w-11/12 mx-auto mt-4 max-w-lg 
        border-b-2 border-gray-800">

          {/* Foto de Pefil Nombre hora*/}

          <div className="flex flex-row justify-between items-center mb-3">
          
          <div className="flex flex-row items-center gap-x-1 ml-2">
            <img src={"/perfil.jpg"} height={40} width={40} alt="profile" className="rounded-full cursor-pointer" />
            <h5 className="font-semibold text-white ml-2 mr-1 cursor-pointer"> nicolas_falabella </h5>
            <BsFillPatchCheckFill className="text-verificado bg-black text-sm"/>
            <h6 className="text-gray-400 ml-1"> • 11 min </h6>
          </div>

          <div className="mr-4">
          <BsThreeDots className="text-gray-300"/>
          </div>

          </div>

          {/* imgn Proyecto*/}

          <div className="mb-4">
            <img src={"/publicacion.jpg"} width={500} height={500} alt="proyecto" className="w-full rounded-sm"></img>
          </div>

          {/* Iconos*/}

          <div className="flex flex-row justify-between mt-2 items-center">

            <div className="flex flex-row gap-x-3">
              <AiOutlineHeart className="text-3xl text-white hover:text-red-600  cursor-pointer transition-all duration-300"/>
              <FaRegComment className="text-3xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
              <TbLocation className="text-3xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
            </div>

            <div>
              <BsSave className="text-2xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
            </div>

          </div>

          {/* Me gusta*/}

          <div>
            <h6 className="text-white font-semibold py-1 cursor-pointer">24 Me gusta</h6>
          </div>

          {/* Me gusta*/}
          <div>
            <h6 className="font-semibold text-white text-sm mb-2"> <span className="cursor-pointer hover:text-gray-500 transition-all duration-200"> nicolas_falabella </span> 
            <span className="font-normal ml-1 text-sm"> El primer Portfolio relaizado con react el a para verlo es el siguiente :</span></h6>
            <h6 className="text-gray-500 mb-8 text-sm"> Comentarios desactivados</h6>
          </div>

        </div>

        <div className="w-11/12 mx-auto mt-4 max-w-lg 
        border-b-2 border-gray-800">

          {/* Foto de Pefil Nombre hora*/}

          <div className="flex flex-row justify-between items-center mb-3">
          
          <div className="flex flex-row items-center gap-x-1 ml-2">
            <img src={"/perfil.jpg"} height={40} width={40} alt="profile" className="rounded-full cursor-pointer" />
            <h5 className="font-semibold text-white ml-2 mr-1 cursor-pointer"> nicolas_falabella </h5>
            <BsFillPatchCheckFill className="text-verificado bg-black text-sm"/>
            <h6 className="text-gray-400 ml-1"> • 11 min </h6>
          </div>

          <div className="mr-4">
          <BsThreeDots className="text-gray-300"/>
          </div>

          </div>

          {/* imgn Proyecto*/}

          <div className="mb-4">
            <img src={"/publicacion.jpg"} width={500} height={500} alt="proyecto" className="w-full rounded-sm"></img>
          </div>

          {/* Iconos*/}

          <div className="flex flex-row justify-between mt-2 items-center">

            <div className="flex flex-row gap-x-3">
              <AiOutlineHeart className="text-3xl text-white hover:text-red-600  cursor-pointer transition-all duration-300"/>
              <FaRegComment className="text-3xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
              <TbLocation className="text-3xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
            </div>

            <div>
              <BsSave className="text-2xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
            </div>

          </div>

          {/* Me gusta*/}

          <div>
            <h6 className="text-white font-semibold py-1 cursor-pointer">24 Me gusta</h6>
          </div>

          {/* Me gusta*/}
          <div>
            <h6 className="font-semibold text-white text-sm mb-2"> <span className="cursor-pointer hover:text-gray-500 transition-all duration-200"> nicolas_falabella </span> 
            <span className="font-normal ml-1 text-sm"> El primer Portfolio relaizado con react el a para verlo es el siguiente :</span></h6>
            <h6 className="text-gray-500 mb-8 text-sm"> Comentarios desactivados</h6>
          </div>

        </div>

        <div className="w-11/12 mx-auto mt-4 max-w-lg 
        border-b-2 border-gray-800">

          {/* Foto de Pefil Nombre hora*/}

          <div className="flex flex-row justify-between items-center mb-3">
          
          <div className="flex flex-row items-center gap-x-1 ml-2">
            <img src={"/perfil.jpg"} height={40} width={40} alt="profile" className="rounded-full cursor-pointer" />
            <h5 className="font-semibold text-white ml-2 mr-1 cursor-pointer"> nicolas_falabella </h5>
            <BsFillPatchCheckFill className="text-verificado bg-black text-sm"/>
            <h6 className="text-gray-400 ml-1"> • 11 min </h6>
          </div>

          <div className="mr-4">
          <BsThreeDots className="text-gray-300"/>
          </div>

          </div>

          {/* imgn Proyecto*/}

          <div className="mb-4">
            <img src={"/publicacion.jpg"} width={500} height={500} alt="proyecto" className="w-full rounded-sm"></img>
          </div>

          {/* Iconos*/}

          <div className="flex flex-row justify-between mt-2 items-center">

            <div className="flex flex-row gap-x-3">
              <AiOutlineHeart className="text-3xl text-white hover:text-red-600  cursor-pointer transition-all duration-300"/>
              <FaRegComment className="text-3xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
              <TbLocation className="text-3xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
            </div>

            <div>
              <BsSave className="text-2xl text-white hover:text-red-600  cursor-pointer  transition-all duration-300"/>
            </div>

          </div>

          {/* Me gusta*/}

          <div>
            <h6 className="text-white font-semibold py-1 cursor-pointer">24 Me gusta</h6>
          </div>

          {/* Me gusta*/}
          <div>
            <h6 className="font-semibold text-white text-sm mb-2"> <span className="cursor-pointer hover:text-gray-500 transition-all duration-200"> nicolas_falabella </span> 
            <span className="font-normal ml-1 text-sm"> El primer Portfolio relaizado con react el a para verlo es el siguiente :</span></h6>
            <h6 className="text-gray-500 mb-8 text-sm"> Comentarios desactivados</h6>
          </div>

        </div>

      </div>  

    </div>
  )
}
