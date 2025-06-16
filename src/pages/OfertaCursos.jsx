import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button'; 

function OfertaCursos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPrice, setCurrentPrice] = useState("");

  const cursos = [
    {
      id: 'curso-caporales',
      nombre: 'CAPORALES',
      descripcion: 'Aprende la energía y el ritmo de los Caporales, danza afro-boliviana. Nivel: Básico - Intermedio.',
      precio: '$250 Bs/mes',
      imagen: 'https://st2.depositphotos.com/1320014/9864/i/950/depositphotos_98640930-stock-photo-caporales-dance-group.jpg' 
    },
    {
      id: 'curso-diablada',
      nombre: 'DIABLADA',
      descripcion: 'Sumérgete en la majestuosidad de la Diablada, danza icónica del Carnaval de Oruro. Nivel: Básico - Intermedio.',
      precio: '$150 Bs/mes',
      imagen: 'https://boliviamia.net/Images/ArticlePhotos/diablada01.jpg'
    },
    {
      id: 'curso-cueca',
      nombre: 'CUECA COCHABAMBINA',
      descripcion: 'Domina los pasos elegantes y el coqueteo de la Cueca Cochabambina. Nivel: Básico - Intermedio.',
      precio: '$120 Bs/mes',
      imagen: 'https://www.ibolivia.org/wp-content/uploads/2019/07/danza-cueca-cochabambina.jpg'
    },
  ];

  const openModalWithPrice = (price) => {
    setCurrentPrice(price);
    setModalOpen(true);
  };

  return (
    <div className="p-15 w-full">
      <div className="max-w-5xl mx-auto"> 
        <h1 className="text-4xl font-extrabold text-gray-900 mb-15 text-center">Oferta de Cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {cursos.map((curso) => (
            <div key={curso.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"> 
              <img src={curso.imagen} alt={curso.nombre} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{curso.nombre}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{curso.descripcion}</p>
                <Button onClick={() => openModalWithPrice(curso.precio)} className="w-full mt-auto">
                  Ver Precio
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Precio del Curso</DialogTitle>
            </DialogHeader>
            <div className="py-4 text-center">
              <p className="text-2xl font-bold text-blue-700">{currentPrice}</p>
            </div>
            <Button onClick={() => setModalOpen(false)}>Cerrar</Button>
          </DialogContent>
        </Dialog>
      </div> 
    </div>
  );
}

export default OfertaCursos;