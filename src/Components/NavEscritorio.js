

// icons
import{
    GoHome
} from "react-icons/go"
  
  import {
    CgAddR
  } from 'react-icons/cg' ;
  
  import {
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch
  } from 'react-icons/ai' ;
  
  import{
    PiMessengerLogo
  } from "react-icons/pi" ; 
  
  import {
    RxHamburgerMenu
  } from "react-icons/rx" ; 
  
 
  
  export const navDataPC = [
    { name: 'Inicio', path: '/', icon: <GoHome className='fill-white'/> },
    { name: 'Búsqueda', path: '/search', icon: <AiOutlineSearch className='text-white'/> },
    { name: 'Mensajes', path: '/md', icon: <PiMessengerLogo /> },
    { name: 'Notificaciones', path: '/notification', icon: <AiOutlineHeart/> },
    { name: 'Crear', path: '/add', icon: <CgAddR /> },
    { name: 'Perfil', path: '/profile', icon: <AiOutlineUser /> },
  ];


 

  
  const NavEscritorio = () => {

    const estado = false ;
       
    return (     
  
    <div className='hidden max-h-screen
    md:w-5/12 
    lg:w-1/12
    xl:w-3/12  max-w-xs md:flex border-r-2 border-gray-800 
    flex-col justify-between items-start mx-0  bg-black relateive'>


        <div className='text-white ml-4 w-[100%]'>

        <img src={"/portfolio.png"} width={120} height={120} alt="" className="ml-4 lg:hidden xl:flex mt-6 mb-6"/>
        <img src={"/png.png"} width={40} height={40} alt="" className="hidden lg:flex xl:hidden ml-3 mt-6 mb-6"/>
        {navDataPC.map(( link , index )=>{

          if (link.name === 'Mensajes'){
            return (              
              <a key={ index } href={link.path} className=" w-[85%] lg:w-[70%] xl:w-[85%] flex flex-row items-center gap-x-2 py-4 pr-2 rounded-md hover:bg-gris "> 
                <span className='text-3xl pl-4 relative' > {link.icon} <span className="bg-red-500 text-white px-2 rounded-full text-sm font-normal absolute -top-2 -right-2"> 1 </span> </span>  
                <span className='text-white lg:hidden xl:flex text-lg font-sm'> {link.name}</span> 
              </a>
            )
          }
            return(

              <a key={ index } href={link.path} className=" w-[85%] lg:w-[70%] xl:w-[85%] flex flex-row items-center gap-x-2 py-4 pr-2 rounded-md hover:bg-gris"> 
                <span className='text-3xl pl-4 ' > {link.icon} </span>  
                <span className='text-white lg:hidden xl:flex text-lg font-sm'>   {link.name}</span> 
              </a>

            )
          })}

        </div>

       
        <a href="/more" className="w-[85%] flex flex-row items-center gap-x-4 py-4 rounded-md hover:bg-gris  ml-4 mb-9"> 
            <span className='text-3xl pl-4'>  <RxHamburgerMenu className='text-white'/> </span>  
            <span className='text-white  lg:hidden xl:flex text-lg font-sm'> Más </span> 
        </a>




   </div>
    
    ) 
  };
  
  export default NavEscritorio;
  