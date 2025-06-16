import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Header() {
    return (
      <header className="bg-gray-800 text-white p-5 flex justify-between items-center shadow-md">
      <div className="flex items-baseline space-x-4">
        <h1 className="text-xl font-bold">Academia de Baile "Brayan Ronald Chambi Tola"</h1>
      </div>
      <nav>
        <ul className="flex space-x-6"> 
          <li>
            <Button asChild variant="ghost" className="text-white hover:text-blue-400">
              <Link to="/">INICIO</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant="ghost" className="text-white hover:text-blue-400">
              <Link to="/oferta-cursos">OFERTAS DE CURSOS</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
    );
}

export default Header;
