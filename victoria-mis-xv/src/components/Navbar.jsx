'use client';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" shadow-md fixed w-full z-50 top-0">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#a88f4d]">Victoria Mis XV</div>

       
        <button
          className="text-[#a88f4d] lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        
        <ul className="hidden md:flex lg:flex space-x-6 text-[#a88f4d] font-semibold">
          <li><a href="#inicio" className="hover:underline">Inicio</a></li>
          <li><a href="#cuenta-regresiva" className="hover:underline">Cuenta</a></li>
          <li><a href="#detalles" className="hover:underline">Detalles</a></li>
          <li><a href="#fotos" className="hover:underline">Fotos</a></li>
          <li><a href="#confirmar" className="hover:underline">Confirmar</a></li>
        </ul>
      </div>

      
      {menuOpen && (
        <ul className="lg:hidden bg-white px-4 pb-4 space-y-2 text-[#a88f4d] font-semibold">
          <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#cuenta-regresiva" onClick={toggleMenu}>Cuenta</a></li>
          <li><a href="#detalles" onClick={toggleMenu}>Detalles</a></li>
          <li><a href="#fotos" onClick={toggleMenu}>Fotos</a></li>
          <li><a href="#confirmar" onClick={toggleMenu}>Confirmar</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
