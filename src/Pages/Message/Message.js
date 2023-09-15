import React , { useState } from 'react' ; 



import { BiEdit } from "react-icons/bi" ;
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { BsTelephone } from "react-icons/bs" ;
import { AiOutlineVideoCamera } from "react-icons/ai" ;
import { AiOutlineInfoCircle } from "react-icons/ai" ;
import { AiOutlineSmile } from "react-icons/ai" ;
import { CiMicrophoneOn } from "react-icons/ci"
import { IoImageOutline } from "react-icons/io5" ;



export const redesPrivadas = [

  { 
    red: 'Nicolas Falabella',
    comentario: 'Elije una red para contactarme',
    subtitulo : "Contactame por cualquier red social" ,
    boton:   <a className='font-semibol bg-gray-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-verificado transition-all duration-200' href='/md'> Enviar mensaje </a> ,
    img:"./perfil.jpg" 
    
  },

  { 
    red: 'Whatsapp',
    comentario: 'Contactar por Whatsapp',
    subtitulo : "Contactame por Whatsapp" ,
    boton:   <a className='font-semibol bg-gray-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-green-500 transition-all duration-200' href='https://api.whatsapp.com/send/?phone=5492324584106'
    target="_blank" rel="noopener noreferrer"
    > Enviar mensaje </a> ,
    img:"./wp.jpg" 
    
  },

  { 
    red: 'Instagram',
    comentario: 'Contactar por Instagram',
    subtitulo: 'Contactar por Instagram',
    boton:   <a className='font-semibol bg-gray-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-orange transition-all duration-200'  href='https://www.instagram.com/nfalabella_/' target="_blank" rel="noopener noreferrer"> Enviar mensaje </a> ,
    img:"./ins.jpg" 
  },

  { 
    red: 'Mail',
    comentario: 'Contactar por Email',
    subtitulo: 'Contactar por Email',
    boton:   <a className='font-semibol bg-gray-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-red-400 transition-all duration-200' href='mailto:nicolasgfalabella@gmail.com' target="_blank" rel="noopener noreferrer"> Enviar Email </a> ,
    img:"./mail.jpg" 
  },

   { 
    red: 'GitHub',
    comentario: 'Ver Perfil de GitHub',
    subtitulo: 'Ver Perfil de GitHub',
    boton:   <a className='font-semibol bg-gray-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-violet transition-all duration-200' href='https://github.com/Nicoogf' target="_blank" rel="noopener noreferrer"> Visitar Perfil </a> ,
    img:"./github.jpg" 
  }
]








  


export default function Message() {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState(0);

  const handleOpcionClick = (index) => {
    setOpcionSeleccionada(index);
  };

  const dataActual = redesPrivadas[opcionSeleccionada];

  return (

   
    <div className='max-h-screen w-full md:7/12 lg:w-7/12 xl:6/12 text-white overflow-hidden flex flex-row'>

    <div className='w-[20%] border-r-2 border-gray-800 bg-black h-screen xxl:w-[30%]'> 

       

          {/* Plataforma */}
          <div className='mb-5'>

          <div className='w-[80%] mx-auto flex flex-row  xxl:items-center justify-start xxl:justify-center lg:justify-around items-center mb-5 xxl:mt-4'>
            <h6 className='hidden xxl:flex font-semibold text-lg'>nicolas_falabella</h6>
            <BiEdit className='text-4xl cursor-pointer mx-auto mt-4 xxl:mt-0'/>
          </div>

          <div className='hidden xxl:flex font-semibold text-sm gap-x-2  flex-row justify-around items-center  '> 
          <h5 >Medios de contacto</h5> 
          <h5 className='text-gray-400'>Solicitudes</h5> 
          </div>

          </div>



          { /*Chat */}
          <div className='flex flex-col gap-y-4 w-[100%] xxl:ml-2'>

          {redesPrivadas.map((item, index) => (
            <button key= {index}                
                    onClick={() => handleOpcionClick(index)}
                    className='flex flex-row gap-x-1 justify-center xxl:justify-start items-center xxl:ml-2'>
            <img src= {item.img} className='rounded-full w-[60%] xl:w-[50%] xxl:w-[18%]'/>
            <div className='hidden xxl:flex flex-col justify-start items-start'>
              <h5 className='font-bold'> {item.red} </h5>
              <div className='flex flex-row text-sm gap-x-1 items-center'>
                <h6 className='text-[11px]'> {item.subtitulo} </h6>
                <h6 className='text-gray-400 text-[10px]'>  8 min </h6>
              </div>           
            </div>         
          </button>
          )
            )
          }
            
        

          

          
        

          

          </div>
          

    </div>

    <div className='w-[80%] bg-black xxl:w-[70%] flex flex-col justify-between '>

      <div className='flex flex-row w-[100%] border-b-2 border-gray-800'>

        <div className='flex flex-row justify-between w-[100%] py-4'>

          <div className='flex flex-row items-center ml-3 gap-x-2'>
              <img src={"/perfil.jpg"} className='w-14  rounded-full xxl:w-10'/>
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

      <div className='flex flex-col w-[100%] justify-center items-center '>
        <img src={dataActual.img} className='w-[35%] rounded-full mb-2'/>
        <div className='flex flex-row gap-x-4 items-center'>
          <h6 className='text-2xl font-bold'> { dataActual.red } </h6>
          <BsFillPatchCheckFill className="text-verificado bg-black text-lg"/>
        </div> 

        <h6 className='text-md text-gray-400 mb-4'>Contactar por {dataActual.red} </h6>


        { dataActual.boton}
      </div>

      <div className='w-[90%] border-2 border-gray-500 mx-auto rounded-2xl flex flex-row justify-between py-3 mb-20 md:mb-8'>
      
        <div className='flex flex-row gap-x-2 items-center'>
        <AiOutlineSmile className='ml-2 text-4xl'/>
        <p className='text-sm'> Apretar Boton "Enviar Mensaje" </p>
        </div>

        <div className='flex flex-row gap-x-2 items-center'>
        <CiMicrophoneOn className=' text-4xl'/>
        <IoImageOutline className='mr-2  text-4xl'/>
        </div>

      </div>

    </div>




   
    
     </div>
   
  )
}
