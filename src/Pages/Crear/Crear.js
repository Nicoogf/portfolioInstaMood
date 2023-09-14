import React from 'react'

export default function Crear() {
  return (
    <div className='max-h-screen w-full md:7/12 lg:w-7/12 xl:6/12 bg-black h-[100vh] overflow-hidden text-white flex flex-col justify-center items-center'>
      
      <div className='w-full md:w-[80%]'>
        <h2 className='text-xl font-bold text-center'> Deja tu Mensaje </h2>
        <h3 className='text-xl font-semibold text-center mb-8'> Sin salir de la aplicacion </h3>
      </div>
      

      <div className='w-full flex flex-col items-center mb-5 max-w-lg'>     
        <h3 className='text-lg mb-2'> Ingresa tu nombre </h3>
        <input placeholder='Ingresar nombre' className='w-[80%] bg-gray-700 rounded-lg py-2 placeholder:text-center'></input>
      </div>

      <div className='w-full flex flex-col items-center mb-5 max-w-lg'>        
        <h3 className="text-lg mb-2"> Email </h3>
        <input placeholder='Ingresar Email' className='w-[80%] bg-gray-700 rounded-lg py-2 placeholder:text-center'></input>
      </div>

      <div className='w-full flex flex-col items-center mb-6 max-w-lg'>  
       <h4>Asunto </h4>
      <textarea className='w-[80%] h-[40vh] bg-gray-700 rounded-lg py-2 placeholder:text-center'> </textarea>
     </div>
      


      <button className='bg-verificado py-2 px-6 rounded-xl text-lg'> Enviar </button>
    </div>
  )
}
