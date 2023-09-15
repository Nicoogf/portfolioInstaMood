

const LateralDerecho = () => {
  return (
    <div className="max-h-screen hidden bg-black lg:flex flex-col justify-around items-center lg:w-4/12 xl:w-5/12  max-w-sm border-l-2 border-gray-800">

      {/* Perfil */}

      <div className=" max-h-screen w-[100%] flex flex-row items-center justify-center gap-x-2 mt-6">

        <div>
        <img src={"/perfil.jpg"} width={50} height={50} alt="50" className="rounded-full mr-1" />
        </div>

        <div>

         <a href="/profile" className="-p-1 -my-1 text-sm font-semibold text-white"> Desarrollador </a> 
         
         <h6 className="-p-1 -my-1 text-sm text-gray-400"> Front-end</h6>
        </div>

        <div>
          <a  href={"https://www.instagram.com/nfalabella_/"}
              target="_blank"
              rel="noopener noreferrer"    
              className='ml-8 text-sm font-semibold text-verificado hover:text-white transition-all duration-300'>

                  Seguir
                   
          </a>
        </div>
      </div>


      {/*Sugerencia */}

      <div className="w-[90%] flex flex-col mt-10 items-start ml-2 mb-5 mx-0">

        <h5 className="font-semibold text-gray-400 text-md mb-6"> Manejo de </h5>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <img src={"/stack.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">HTML - CSS </h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Stack Inicial</h6>
            </div>
            
          </div>

          
          <div>
          <a  href={"https://lenguajehtml.com/"} 
              target="_blank"
              rel="noopener noreferrer"       
              className={'text-sm ml-4 text-verificado hover:text-white transition-all duration-300'}>
                  Seguir
          </a>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <img src={"/js.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">Javascript</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Dialecto estándar - ECMAScript</h6>
            </div>
            
          </div>

          
          <div>
          <a  href={"https://www.instagram.com/javascript.js/?hl=es"}
               target="_blank"
               rel="noopener noreferrer"      
                 className={'text-sm ml-4 text-verificado hover:text-white transition-all duration-300'}>

                  Seguir
                   
          </a>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
            <img src={"/react.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">React Js</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Creacion de interfaces de usuario</h6>
            </div>
            
          </div>

          
          <div>
          <a  href={"https://react.dev/"}
              target="_blank"
              rel="noopener noreferrer"           
                 className={'text-sm ml-4 text-verificado hover:text-white transition-all duration-300'}>

                  Seguir
                   
          </a>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

        <div className="flex flex-row items-center gap-x-4">
            <img src={"/node.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">NodeJs</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Entorno de ejecución multiplataforma</h6>
            </div>
            
         </div>

          
          <div>
          <a  href={"https://nodejs.org/es"}
              target="_blank"
              rel="noopener noreferrer"    
                 className={'text-sm ml-4 text-verificado hover:text-white transition-all duration-300'}>

                  Seguir
                   
          </a>
          </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

          <div className="flex flex-row items-center gap-x-4">
              <img src={"/tailwind.jpg"} height={50} width={50} alt='js' className="rounded-full" />
              
              <div>
              <h5 className="text-md -p-1 -my-1 text-white">Tailwind CSS</h5>
              <h6 className="text-xs -p-1 -my-1 text-gray-400">Framework de CSS</h6>
              </div>
              
          </div>

            
            <div>
            <a  href={"https://tailwindcss.com/"}
                target="_blank"
                rel="noopener noreferrer"     
                className={'text-sm ml-4 text-verificado hover:text-white transition-all duration-300'}>

                    Seguir
                    
            </a>
            </div>

        </div>

        <div className="flex flex-row w-[85%] items-center justify-between gap-x-4 mb-3">

        <div className="flex flex-row items-center gap-x-4">
            <img src={"/next.jpg"} height={50} width={50} alt='js' className="rounded-full" />
            
            <div>
            <h5 className="text-md -p-1 -my-1 text-white">Next.js</h5>
            <h6 className="text-xs -p-1 -my-1 text-gray-400">Marco web de desarrollo front-end</h6>
            </div>
            
        </div>

          
          <div>
          <a  href={"https://nextjs.org/"}
              target="_blank"
              rel="noopener noreferrer"     
                className={'text-sm ml-4 text-verificado hover:text-white transition-all duration-300'}>

                  Seguir
                  
          </a>
          </div>

        </div>


        

    
      </div>


      {/* Links */}

      <div className="mb-8">
      <a  href={"https://github.com/Nicoogf/portfolioInstaMood"} 
          target="_blank"
          rel="noopener noreferrer"     className={'text-sm ml-4 text-gray-500 hover:underline '}>
           Repositorio -         
      </a>

      <a  href={"https://github.com/Nicoogf"} 
          target="_blank"
          rel="noopener noreferrer"
          className={'text-sm ml-4 text-gray-500 hover:underline '}>
           Perfil Git -                 
      </a>

      <a  href="mailto:nicolasgfalabella@gmail.com" className={'text-sm ml-4 text-gray-500 hover:underline '}>
           Email -                 
      </a>

      <a  href={"https://www.instagram.com/nfalabella_/"} 
        target="_blank"
        rel="noopener noreferrer"
        className={'text-sm ml-4 text-gray-500 hover:underline '}>
           Instagram                 
      </a>

      <br />

      <a  href={"https://api.whatsapp.com/send?phone=5492324584106"} className={'text-sm ml-4 text-gray-500 hover:underline '}>
           WhatsApp                
      </a>

      <a  href={"https://www.linkedin.com/in/nicolas-falabella-02ab47251/"} 
          target="_blank"
          rel="noopener noreferrer" className={'text-sm ml-4 text-gray-500 hover:underline '}>
           Linkedin                
      </a>

      </div>


      {/* Descripcion */}
      <div>
        <h6 className={'ml-4 text-gray-500 hover:underline text-md '}>   © Porfolio realizado ReactJS</h6>
      </div>
    </div>
  ) 
};

export default LateralDerecho;
