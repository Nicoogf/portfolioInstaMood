import { useLocation } from 'react-router-dom';

  import {
    CgAddR
  } from 'react-icons/cg' ;
  
  import {
    AiOutlineUser,
    AiOutlineSearch
  } from 'react-icons/ai' ;
  
  import{
    PiMessengerLogo
  } from "react-icons/pi" ; 
  
  import{
    GoHome
  } from "react-icons/go"
  
  
  // nav data
  export const navDataMovile = [
    { name: 'inicio', path: '/', icon: <GoHome /> },
    { name: 'busqueda', path: '/search', icon: <AiOutlineSearch /> },
    { name: 'crear', path: '/add', icon: <CgAddR /> }, 
    { name: 'mensaje', path: '/md', icon: <PiMessengerLogo /> },
    { name: 'perfil', path: '/profile', icon: <AiOutlineUser /> },
  ];
  

  

  const Nav = () => {
    
    const router = useLocation() ;
    const pathname = router.location
  
    return (
      <nav className=''>
        {/* Inner*/}
     
        <div className='fixed w-full bottom-0 flex md:hidden flex-row gap-y-4 justify-around bg-black h-[55px] items-center'>
          {navDataMovile.map(( link , index )=>{
            return(
              <a 
              href={link.path}    className={`hover:bg-gris py-2 px-4 rounded-md  `}
              key={ index }> 
  
                  <span className={` text-3xl ${link.path === pathname ? 'bg-gris text-rojoNotificacion' : 'text-white'}`}> 
                  {link.icon}  
                  </span> 
  
              </a>
            )
          })}
        </div>
      </nav>
    ) 
  };
  
  export default Nav;
  