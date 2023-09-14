import React from 'react' ;
import { BiEdit } from "react-icons/bi" ;
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { BsTelephone } from "react-icons/bs" ;
import { AiOutlineVideoCamera } from "react-icons/ai" ;
import { AiOutlineInfoCircle } from "react-icons/ai" ;

export default function Message() {
  return (
    <div className='max-h-screen w-full md:7/12 lg:w-7/12 xl:6/12 text-white overflow-hidden flex flex-row'>

    <div className='w-[20%] bg-red-500 h-screen xxl:w-[30%]'> 
          {/* Plataforma */}
          <div className='mb-5'>

          <div className='flex flex-row justify-start lg:justify-around items-center mb-5'>
            <h6 className='hidden font-semibold text-lg'>nicolas_falabella</h6>
            <BiEdit className='text-4xl cursor-pointer mx-auto mt-4'/>
          </div>

          <div className='font-semibold text-sm gap-x-2 xxl:flex flex-row justify-around items-center hidden '> 
          <h5 >Medios de contacto</h5> 
          <h5 className='text-gray-400'>Solicitudes</h5> 
          </div>

          </div>



          { /*Chat */}
          <div className='flex flex-col gap-y-4'>

          <div className='flex flex-row gap-x-3 items-center'>
            <img src='/perfil.jpg' className='rounded-full w-16 mx-auto'/>
            <div className='hidden'>
              <h5 className='font-bold'>Whatsapp</h5>
              <div className='flex flex-row text-sm gap-x-2 items-center'>
                <h6 className=''>Contactame por Whatsapp!</h6>
                <h6 className='text-gray-400'>  8 min </h6>
              </div>           
            </div>         
          </div>

          <div className='flex flex-row gap-x-3 items-center'>
            <img src='/perfil.jpg' className='rounded-full w-16 mx-auto'/>
            <div className='hidden'>
              <h5 className='font-bold'>Whatsapp</h5>
              <div className='flex flex-row text-sm gap-x-2 items-center'>
                <h6 className=''>Contactame por Whatsapp!</h6>
                <h6 className='text-gray-400'>  8 min </h6>
              </div>           
            </div>         
          </div>


          <div className='flex flex-row gap-x-3 items-center'>
            <img src='/perfil.jpg' className='rounded-full w-16 mx-auto'/>
            <div className='hidden'>
              <h5 className='font-bold'>Whatsapp</h5>
              <div className='flex flex-row text-sm gap-x-2 items-center'>
                <h6 className=''>Contactame por Whatsapp!</h6>
                <h6 className='text-gray-400'>  8 min </h6>
              </div>           
            </div>         
          </div>


          <div className='flex flex-row gap-x-3 items-center'>
            <img src='/perfil.jpg' className='rounded-full w-16 mx-auto'/>
            <div className='hidden'>
              <h5 className='font-bold'>Whatsapp</h5>
              <div className='flex flex-row text-sm gap-x-2 items-center'>
                <h6 className=''>Contactame por Whatsapp!</h6>
                <h6 className='text-gray-400'>  8 min </h6>
              </div>           
            </div>         
          </div>

          <div className='flex flex-row gap-x-3 items-center'>
            <img src='/perfil.jpg' className='rounded-full w-16 mx-auto'/>
            <div className='hidden'>
              <h5 className='font-bold'>Whatsapp</h5>
              <div className='flex flex-row text-sm gap-x-2 items-center'>
                <h6 className=''>Contactame por Whatsapp!</h6>
                <h6 className='text-gray-400'>  8 min </h6>
              </div>           
            </div>         
          </div>


          

          </div>
          

    </div>

    <div className='w-[80%] bg-gray-800 xxl:w-[70%]'>

      <div className='flex flex-row w-[100%]'>

        <div className='flex flex-row justify-between w-[100%] py-4'>

          <div className='flex flex-row items-center ml-3 gap-x-2'>
              <img src={"/perfil.jpg"} className='w-14  rounded-full'/>
              <h6 className='font-semibold'> Nicolas Falabella </h6>
              <BsFillPatchCheckFill className="text-verificado bg-black text-sm"/>
          </div>

          <div className='flex flex-row items-center mr-3 gap-x-3'>
            < BsTelephone className='text-3xl'/>
            < AiOutlineVideoCamera className='text-3xl'/>
            < AiOutlineInfoCircle className='text-3xl'/>
          </div>

        </div>

      </div>

    </div>
      
     </div>
  )
}
