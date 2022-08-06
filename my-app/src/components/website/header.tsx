import Link from 'next/link';
import React from 'react'
import style from './header.module.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <nav className="z-0 relative" x-data="{open:false,menu:false, lokasi:false}">
        <div className="relative z-10 bg-white shadow">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <a className="flex-shrink-0" href="#">
                  <img className="hidden lg:block h-12 w-auto" src="https://bloggiay.com/wp-content/uploads/2016/05/Converse-Logo.jpg" alt="Logo" />
                </a>
                
                <div className="hidden lg:block lg:ml-2">
                  <div className="flex">
                  <Link href={`/`} >
                    <a href='' className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Home </a>
                    </Link>
                    <Link href={`products`} >
                    <a href='' className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Products </a>
                    </Link>
                    <Link href={`news`} >
                    <a href='' className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> News </a>
                    </Link>
                    <Link href={`blog`} >
                      <a  className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Blog </a>
                    </Link>
                    <Link href={`contact`} >
                      <a  className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Contact </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex  px-2 lg:ml-6 lg:justify-end items-center gap-x-5">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">Search </label>
                  <form action="#" className="relative z-50">
                    <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-600 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" />
                  </form>
                </div>
                <div>
                <Link href="/signin">
                      <a  className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "><svg className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg></a>
                    </Link>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div x-show="menu" className="block md:hidden">
            <div className="px-2 pt-2 pb-3">
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Location </a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Article </a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Recipe </a>
              <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Promo </a>
            </div>
          </div>
        </div>
      </nav >
    </div>
  )
}

export default Header