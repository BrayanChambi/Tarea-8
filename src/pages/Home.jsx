import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function Home() {
  const danzasPorRegion = [
    {
      value: "la-paz",
      region: "LA PAZ",
      danzas: [
        { nombre: "Morenada", descripcion: "Danza folklórica andina que representa la travesía de los esclavos africanos. Originaria de Oruro y La Paz." },
        { nombre: "Caporales", descripcion: "Danza enérgica y rítmica con orígenes afro-bolivianos, popular en todo el país." },
        { nombre: "Waca Waca", descripcion: "Representa la corrida de toros y es característica de los valles y altiplano." }
      ]
    },
    {
      value: "oruro",
      region: "ORURO",
      danzas: [
        { nombre: "Diablada", descripcion: "Danza principal del Carnaval de Oruro, Obra Maestra del Patrimonio Oral e Intangible de la Humanidad." },
        { nombre: "Tobas", descripcion: "Danza guerrera que representa a las tribus amazónicas de Bolivia." }
      ]
    },
    {
      value: "cochabamba",
      region: "COCHABAMBA",
      danzas: [
        { nombre: "Cueca Cochabambina", descripcion: "Versión de la cueca con un estilo más alegre y cadencioso, típica de los valles." },
        { nombre: "Salay", descripcion: "Danza alegre y coqueta originaria de los valles, con movimientos de zapateo y coqueteo." }
      ]
    },
    {
      value: "santa-cruz",
      region: "SANTA CRUZ",
      danzas: [
        { nombre: "Carnavalito", descripcion: "Danza típica de las festividades cruceñas, alegre y participativa." },
        { nombre: "Chovena", descripcion: "Danza indígena guaraní, representa la conexión con la naturaleza y sus ritos." }
      ]
    },
    {
      value: "potosi",
      region: "POTOSI",
      danzas: [
        { nombre: "Tinku", descripcion: "Ritual ceremonial andino de combate con raíces precolombinas, característico de las comunidades del norte de Potosí." },
        { nombre: "Potosina", descripcion: "Danza folklórica con orígenes en las tradiciones mineras y festividades de la región de Potosí." }
      ]
    }
  ];

  return (
    <div className="p-12 w-full">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Danzas Tipicas de Bolivia</h1>
        <Accordion type="single" collapsible className="w-full">
          {danzasPorRegion.map((regionData) => (
            <AccordionItem key={regionData.value} value={regionData.value}>
              <AccordionTrigger className="text-xl font-semibold text-blue-700 hover:text-blue-900">
                {regionData.region}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-gray-50 border-t border-gray-200">
                {regionData.danzas.map((danza, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h3 className="text-lg font-bold text-gray-800">{danza.nombre}</h3>
                    <p className="text-gray-700">{danza.descripcion}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div> 
    </div>
  );
}

export default Home;