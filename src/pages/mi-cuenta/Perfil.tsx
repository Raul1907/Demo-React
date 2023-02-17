import React, { FC, useState } from 'react'
import Navigation from '../../components/Navigation/Menu';

const Perfil:FC = () => {

  const [sideBar, setSideBar]= useState(false);

  return (
    <>
      {/* <div className='flex mb-4'>
        <div className='w-1/3 bg-gray-400 h-12' ></div>
        <div className='w-1/3 bg-gray-500 h-12' ></div>
        <div className='w-1/3 bg-gray-600 h-12' ></div>
      </div> */}
      <div className='min-h-screen grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4'>
        {/* Sidebar */}
        <div className={ `fixed lg:static md:static  bg-white top-0 z-0 ${ sideBar ? "left-0" : "-left-full" }  w-full h-full overflow-y-auto overflow-x-auto lg:col-span-1 md:col-span-1 p-2 border-r transition-all` }>
          {/*Logotipo */}
          <div className='flex items-center justify-center text-xs md:py-2 sm:py-1 px-2'>
            <img src='/src/assets/images/privates/sky-new-2020-seeklogo1.svg'/>
            <h1 className='font-bold tracking-[2px]'>Mi Sky</h1>
          </div>
          <div className=' flex flex-col h-5/6 justify-between'>
            {/*menu */}
            <div>
              <Navigation />
            </div>
            {/* Cerrar sesion */}
            <div className='flex flex-col border-t-blue-800'>
              <a href="" className='flex items-center gap-3 hover:bg-slate-50 p-2 hover:text-sky-200
                              rounded-lg transition-colors text-xs font-semibold'>
                  <img src='/src/assets/images/privates/navigation/ajustes.svg' /><span>Ajustes</span></a>
              <a href="" className='flex items-center gap-3 hover:bg-slate-50 p-2 hover:text-sky-200
                              rounded-lg transition-colors text-xs font-semibold'>
                  <img src='/src/assets/images/privates/navigation/cerrarSesion.svg' /><span>Cerrar sesión</span></a>
            </div>
          </div>
        </div>
        {/* show hide menu */ }
        <button onClick={ () => {setSideBar(!sideBar)}}
                className='z-50 lg:hidden md:hidden absolute top-6 left-4'> 
                <img src='/src/assets/images/privates/navigation/showMenu.svg' alt="Show menu" />
        </button>
        <button onClick={ () => {}} className=' -z-10 lg:hidden md:hidden absolute top-4 left-11'>
          <img src='/src/assets/images/privates/sky-new-2020-seeklogo1.svg' className='w-12'/>
        </button>
        {/* Content */}
        <div className="lg:col-span-3 md:col-span-3 px-2 py-2 sm:py-3 sm:px-6 md:p-4">
          {/*Header contenido */}
          <header className='text-xs lg:mx-2 flex flex-col sm:flex-row-reverse items-center justify-between p-2 gap-2 '>
            {/* search */}
            <form className='w-full md:w-[40%] lg:w-[30%] order-2 -z-10'>
              <div className='relative'>
                <img src='/src/assets/images/privates/search-normal.svg' className='absolute left-2 top-3' />
                <input type="text" className=' w-full bg-gray-100 py-2 pl-8 pr-4 rounded-lg' placeholder='Buscar'/>
              </div>
            </form>
            {/* notifications */}
            <nav className="w-full md:w-[60%] lg:w-[70%] flex justify-end items-center gap-2 order-1 text-right">
              <ul>
                <li>
                  <a href="" >
                    <img src='/src/assets/images/privates/bell.svg' />
                  </a>
                </li>
              </ul>
              <ul className='text-md'>
                <li className=' font-bold'>
                  ¡Hola! Ruben Marín Hernández
                </li>
                <li>
                  <a href="" className='font-bold text-sky-200 hover:text-blue-400' >
                    Cuenta: 50113886490
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          {/* Content */}
          <div className="mt-2 text-xs lg:mx-2 bg-white rounded-xl shadow-sky1 p-2">
              {/* Title */}
              <div className='flex items-center lg:mb-2 p-2'>
                <h1 className=' text-xl text-sky-200 font-bold p-2'>Mi cuenta</h1>
              </div>
              <div className='flex items-center flex-wrap gap-2 justify-end mb-4'>
                <a href="" className='active flex items-center gap-1 text-sky-200 hover:text-blue-400
                                transition-colors text-xs font-semibold'>
                    <img src='/src/assets/images/privates/navigation/myAccount/address-book.svg' /><span>Mi Perfil</span></a>
                <a href="" className='flex items-center gap-1 text-sky-200 hover:text-blue-400
                                transition-colors text-xs font-semibold'>
                    <img src='/src/assets/images/privates/navigation/myAccount/edit.svg' /><span>Actualización de datos</span></a>
                <a href="" className='flex items-center gap-1 text-sky-200 hover:text-blue-400
                                transition-colors text-xs font-semibold'>
                    <img src='/src/assets/images/privates/navigation/myAccount/address-card.svg' /><span>Cambiar Contraseña</span></a>
              </div>
              {/* Card */}
              <div className="p-2 text-xs">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 ">
                  <div className="grid grid-row-1 gap-2">
                    <div className='grid grid-cols-2 gap-1'>
                      <span className=' text-neutral-900 font-bold'>Cuenta:</span>
                      <span>501113886490</span>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>Suscriptor:</span>
                      <span>Araceli Lorenzo de la cruz</span>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>Usuario:</span>
                      <span>o-alorenzo@sky.com.mx</span>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>Correo:</span>
                      <span>o-alorenzo@sky.com.mx</span>
                    </div>
                  </div>
                  <div className="grid grid-row-1 gap-2">
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>Estatus:</span>
                      <span>Activa</span>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>Nombre:</span>
                      <span>Ruben Marin Hernandez</span>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>País:</span>
                      <span>Mexico</span>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                      <span className='font-bold'>Paquete:</span>
                      <span>Universe</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Perfil