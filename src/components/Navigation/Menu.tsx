import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

const links = [
  { href: '/perfil', label: 'Perfil' },
  { href: '/cambio-paquete', label: 'Cambio de paquete' },
  { href: '/adquiere-equipo-ad', label: 'Adquiere equipos adicionales' },
  { href: '/servicio-tecnico-y-cambio-domicilio', label: 'Servicio técnico y cambio de domicilio' },
  { href: '/factura-electronica', label: 'Factura Electrónica' },
  { href: '/cambio-titular', label: 'Cambio de titular' },
  { href: '/reposicion-tarjeta-inteligente', label: 'Reposición de tarjeta inteligente' },
  { href: '/reporte-dano-robo-extravio', label: 'Reporte de daño, robo o extravío' },
  { href: '/aclaraciones', label: 'Aclaraciones' },
]

const links2 = [
  { href: '/consulta-saldo-y-pago', label: 'Consulta saldo y pago en línea' },
  { href: '/blue-to-go-video-everywhere', label: 'Blue To Go Video Everywhere' },
  { href: '/pago-por-evento', label: 'Pago por evento' },
  { href: '/canales-a-la-carta', label: 'Canales a la carta' },
  { href: '/guia-programacion-tv', label: 'Guía De Programación TV' },
  { href: '/revista-skyview-control-remoto', label: 'Revista Sky View / Control Remoto' },
]

const links3 = [
  { href: '/estatus-internet', label: 'Estatus internet' },
  { href: '/compra-datos-adicionales', label: 'Compra datos adicionales' },
]

const links4 = [
  { href: '/estatus-celular', label: 'Estatus celular' },
  { href: '/compra-paquetes-adicionales', label: 'Compra paquetes adicionales' },
  { href: '/cambia-plan', label: 'Cambia tu plan' },
  { href: '/portabilidad', label: 'Portabilidad' },
]

const links5 = [
  { href: '/su-opinion-nos-interesa', label: 'Su opinión nos interesa' },
  { href: '/otra-informacion', label: '¿Requiere otra información?' },
]

export default function Example() {
  return (
    <Fragment>
      {/* Menu Mi cuenta */}
      <div className="text-left my-2 mx-1">
        <Menu as="div" className="bg-white rounded-2xl shadow-sky1 py-2">
          <div className='  '>
            <Menu.Button className="flex items-center justify-between w-full px-3 text-xs font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex items-center gap-1'>
                  <img src='/src/assets/images/privates/navigation/cuenta.svg' />
                  <span >Mi Cuenta</span>
                </div>
                <img className=' ' src='/src/assets/images/privates/navigation/chevron-down.svg' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className="mt-2 rigin-top-right focus:outline-none">
          <div className="px-1 py-1 ">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
              
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'bg-blue-800 text-white ml-4 px-2 w-11/12' : 'text-gray-900 w-full px-6'
                      } group flex rounded-md pr-0 py-2 transition-colors text-xs font-normal text-left`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
        </Transition>
        </Menu>
      </div>
      {/* Menu Sky tv */}
      <div className="text-left my-2 mx-1">
        <Menu as="div" className="bg-white rounded-2xl shadow-sky1 py-2">
          <div className='  '>
            <Menu.Button className="flex items-center justify-between w-full px-3 text-xs font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex items-center gap-1'>
                <img src='/src/assets/images/privates/navigation/skyTV.svg' />
                  <span >Sky Televisión</span>
                </div>
                <img className=' ' src='/src/assets/images/privates/navigation/chevron-down.svg' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className="mt-2 rigin-top-right focus:outline-none">
          <div className="px-1 py-1 ">
            {links2.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
              
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'bg-blue-800 text-white ml-4 px-2 w-11/12' : 'text-gray-900 w-full px-6'
                      } group flex rounded-md pr-0 py-2 transition-colors text-xs font-normal text-left`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
        </Transition>
        </Menu>
      </div>
      {/* Menu Sky Bt */}
      <div className="text-left my-2 mx-1">
        <Menu as="div" className="bg-white rounded-2xl shadow-sky1 py-2">
          <div className='  '>
            <Menu.Button className="flex items-center justify-between w-full px-3 text-xs font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex items-center gap-1'>
                  <img src='/src/assets/images/privates/navigation/skyTV.svg' />
                  <span>Sky Bluetelecomm</span>
                </div>
                <img className=' ' src='/src/assets/images/privates/navigation/chevron-down.svg' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className="mt-2 rigin-top-right focus:outline-none">
          <div className="px-1 py-1 ">
            {links3.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
              
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'bg-blue-800 text-white ml-4 px-2 w-11/12' : 'text-gray-900 w-full px-6'
                      } group flex rounded-md pr-0 py-2 transition-colors text-xs font-normal text-left`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
        </Transition>
        </Menu>
      </div>
      {/* Menu Sky Cel */}
      <div className="text-left my-2 mx-1">
        <Menu as="div" className="bg-white rounded-2xl shadow-sky1 py-2">
          <div className='  '>
            <Menu.Button className="flex items-center justify-between w-full px-3 text-xs font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex items-center gap-1'>
                  <img src='/src/assets/images/privates/navigation/skyTV.svg' />
                  <span>Sky Celular</span>
                </div>
                <img className=' ' src='/src/assets/images/privates/navigation/chevron-down.svg' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className="mt-2 rigin-top-right focus:outline-none">
          <div className="px-1 py-1 ">
            {links4.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
              
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'bg-blue-800 text-white ml-4 px-2 w-11/12' : 'text-gray-900 w-full px-6'
                      } group flex rounded-md pr-0 py-2 transition-colors text-xs font-normal text-left`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
        </Transition>
        </Menu>
      </div>
      {/* Menu Otros */}
      <div className="text-left my-2 mx-1">
        <Menu as="div" className="bg-white rounded-2xl shadow-sky1 py-2">
          <div className='  '>
            <Menu.Button className="flex items-center justify-between w-full px-3 text-xs font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex items-center gap-1'>
                  <img src='/src/assets/images/privates/navigation/otros.svg' />
                  <span>Otros</span>
                </div>
                <img className=' ' src='/src/assets/images/privates/navigation/chevron-down.svg' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
        <Menu.Items className="mt-2 rigin-top-right focus:outline-none">
          <div className="px-1 py-1 ">
            {links5.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
              
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'bg-blue-800 text-white ml-4 px-2 w-11/12' : 'text-gray-900 w-full px-6'
                      } group flex rounded-md pr-0 py-2 transition-colors text-xs font-normal text-left`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
        </Transition>
        </Menu>
      </div>
    </Fragment>
  )
}

function EditInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}
