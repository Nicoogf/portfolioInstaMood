import React from 'react' ;
import {AiFillFacebook} from "react-icons/ai" ;
 
export default function Crear() {
  return (
    <div className='max-h-screen w-full md:7/12 lg:w-7/12 xl:6/12 bg-black h-[100vh] overflow-hidden text-white flex flex-col justify-center items-center'>
       
      <img src="./portfolio.png" className="w-[50%] max-w-[300px]" />

      <div className='w-full md:w-[80%]'>
        <h2 className='text-xl font-bold text-center'> Deja tu Mensaje </h2>
        <h3 className='text-xl font-semibold text-center mb-4'> Sin salir de la aplicacion </h3>
      </div>

      <a className='flex flex-row items-center cursor-pointer bg-verificado py-2 px-6 rounded-lg mb-4'> <span> <AiFillFacebook /> </span> Dejar mensaje en Facebook </a>
      
      <div className='w-[100%] flex flex-row items-center justify-center'>
        <div className='border-[1px] border-gray-800 w-[90%] mb-4'>  </div>
      </div>

      <div className='w-full flex flex-col items-center mb-5 max-w-lg'>   
        <input placeholder='Ingresar nombre' className='w-[80%] bg-gray-800 rounded-lg py-2 px-2'></input>
      </div>

      <div className='w-full flex flex-col items-center mb-5 max-w-lg'>      
        <input placeholder='Ingresar Email' className='w-[80%] bg-gray-800 rounded-lg py-2 px-2'></input>
      </div>

      <p className='w-[80%] text-sm text-gray-400 mb-5 text-center'>Deja un breve mensaje el cual va a ser respondido a la brevedad</p>

      <div className='w-full flex flex-col items-center mb-6 max-w-lg'>         
      <textarea className='w-[80%] h-[25vh] bg-gray-800 rounded-lg py-2 placeholder:text-center'> </textarea>
     </div>
      


      <button className='bg-verificado py-2 px-6 rounded-xl text-lg'> Enviar </button>
    </div>
  )
}
