import React from 'react' ;
import { BsPersonAdd } from "react-icons/bs"

export default function Profile() {
  return (
    <div className='max-h-screen w-full md:7/12 lg:w-7/12 xl:6/12 text-white overflow-hidden '>

      {/* Perfil */}
     <div className='max-h-screen w-full'>

      <div className='text-white flex flex-col md:flex-row items-center  py-8 border-b-2 border-gray-800 mx-auto'>

        {/* Imagen */}
        <div className='w-[50%] md:w-[40%] mb-4 mx-auto'>
            <img src={"./perfil.jpg"} alt="imagen de perfil" className='rounded-full w-[60%] lg:w-[75%] xl:w-[70%] xxl:max-w-[200px] mx-auto'/>
        </div>

        {/* datos */}
        <div className='w-[100%]'>

            {/* Primera Fila*/}
            <div className='flex flex-col justify-center items-center gap-x-2 w-[100%] mb-5 mx-auto'>

              <h4 className='text-xl w-[100%] mb-4 text-center'>nicolas_falabella</h4>

              <div className='flex flex-row gap-x-4 mx-auto '>
              <a className=' w-[100px] bg-verificado py-3  rounded-lg font-medium text-sm text-center'>Seguir</a>
              <a className='w-[100px] bg-gray-600 py-3 px-2 box-content  rounded-lg text-sm font-medium'>Enviar Mensaje</a>
              <a className='w-[100px] bg-gray-600 rounded-lg py-3 flex flex-col justify-center text-center'> <span className='text-2xl text-white mx-auto'> <BsPersonAdd /> </span> </a>
              </div>
             
              
              <a> <span className='hidden'> ... </span> </a>
            </div>

            {/*SegundaF ila */}
            <div className='hidden lg:flex flex-col mb-4 xxl:flex-row xxl:gap-x-6'>
              <h5 className='text-md gap-x-1 font-semibold flex flex-row 2xl:flex-col items-center'>213 <span className='font-normal items-center text-sm'> Proyectos </span></h5>
              <h5 className='text-md gap-x-1 font-semibold flex flex-row 2xl:flex-col items-center'>175 <span className='font-normal items-center text-sm'> Certificados Oficiales </span></h5>
              <h5  className='text-md gap-x-1 font-semibold flex flex-row 2xl:flex-col items-center'>16 <span className='font-normal items-center text-sm'> Años de experciencia </span></h5>
            </div>

            {/* Ultima */}
            <div className='w-[90%] mx-auto text-center'>
              <h6 className='mb-4'> Busco unirme a un equipo de desarrollo web como Fullstack, donde mis habilidades técnicas <span className='hidden xxl:flex'>  y mi pasión por la creación de experiencias digitales </span>  puedan contribuir al éxito del proyecto</h6>
              <a className='font-medium text-gray-400 text-sm' href='https://www.linkedin.com/in/nicolas-falabella-02ab47251/' target="_blank" rel="noopener noreferrer"> 
              Ir a <span className='text-white cursor-pointer'> Linkeding </span>   </a>
            </div>

        </div>

       

      {/* Grid rows*/}
      </div>

   
         {/* */}
     <div className='flex flex-row justify-around w-[100%] lg:hidden '>
     <div className='flex flex-col items-center pt-2'>
            <h5 className='font-medium'>213</h5>
            <h6 className='text-gray-300 font-normal'>Proyectos</h6>
         </div>

         <div className='flex flex-col items-center pt-2'>
          <h5 className='font-medium'>2</h5>
          <h6 className='text-gray-300 font-normal'>Certificados</h6>
        </div>

        <div className='flex flex-col items-center pt-2'>
           <h5 className='font-medium'>2</h5>
          <h6 className='text-gray-300 font-normal'>Años Exp. </h6>
          </div>
     </div>



     </div>

     {/* Grid */}
     <div className='grid grid-cols-3 gap-2 mt-5 overflow-y-auto h-[700px] lg:h-[1200px] xl:w-[90%] mx-auto'>

          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>
          <img src='/gr1.jpg' alt="a"/>


      </div>
    </div> 



  )
}
