import React from 'react' ;
import  { FaPlay } from "react-icons/fa" ;
import  { AiFillSound } from "react-icons/ai" ;
import  { IoIosMore } from "react-icons/io" ;
import { useState } from 'react';

const HistoriaAbierta = () => {

    const [ historia ,setHistoria ] = useState ( false ) ;

    const AbrirHistoria = () =>{
        setHistoria (!historia)
    }

  return (

    <div className= {`abosulute top-0 right-0 w-full bg-gray-900/50 flex flex-col justify-center items-center`}> 
    {/* Historia */}

    <div className='w-full relative'>
        {/* */}

        <img className='w-full h-screen' src="./historia.jpg"/>


        <div className='absolute top-10 left-10'>

            <div>
                <img src='./perfil.jpg' />
            </div>

            <div>
                <h6>nicolas_falabella</h6>
                <h6> 44 min</h6>
            </div>

            <div>
                <FaPlay />
                <AiFillSound />
                <IoIosMore />
            </div>

        </div>

    </div>

    </div>
  )
}

export default HistoriaAbierta ;
