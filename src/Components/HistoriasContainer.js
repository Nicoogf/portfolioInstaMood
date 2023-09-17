

export const historiasDestacadas = [

  { 
    boton: 'Sobre mi',
    img: '/1.jpg',
  },

  { 
    boton: 'Experiencia',
    img: '/2.jpg',
  },

  { 
    boton: 'Certificados',
    img: '/3.jpg',
  },
  { 
    boton: 'Skills',
    img: '/4.jpg',
  },
  { 
    boton: 'Servicios',
    img: '/5.jpg',
  },  { 
    boton: 'Linkedin',
    img: '/6.jpg',
  },

]



const HistoriasContainer = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-row justify-center mt-4  gap-2 md:gap-4  xl:mx-auto bg-black text-white xl:p-4 overflow-x-scroll pb-2">


   {historiasDestacadas.map( (historia,index) =>{
    return(
      <a key= { index } className="flex flex-col items-center" href="/" >
      <div className="bg-gradient-to-r from-yellow via-orange to-violet rounded-full p-[4px] w-[65px]">
        <img src={ historia.img }  width={75} height={100} alt="" className="rounded-full" />
      </div>        
      <h6 className="text-sm"> { historia.boton } </h6>
      </a>
    )
     
   })}
     

    

    </div>
  ) ;
};

export default HistoriasContainer;
