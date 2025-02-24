'use client'; // Convierte este componente en un Client Component para permitir interactividad

import React from "react";
// Importa el componente Button, que es un botón estilizado y reactivo
import Button from "@/components/Button";
// Importa el componente Tarjeta, que renderiza los planes en tarjetas
import Tarjeta from "@/components/Tarjeta";

// Componente principal de la página de inicio
export default function Home() {
  // Función que se ejecuta cuando se hace clic en el botón "Contáctanos"
  const handleContact = () => {
    // Aquí se puede agregar la lógica para redirigir a un formulario, abrir un modal, etc.
    alert("Acción de contacto");
  };

  return (
    <main className="container py-5">
      {/* Sección principal que incluye título, descripción y el botón de contacto */}
      <section className="text-center mb-4">
        <h1 className="text-primary">Servicios de Desarrollo Web 🚀</h1>
        <p className="descripcion-principal">
          Ofrecemos soluciones web desde opciones básicas hasta desarrollos personalizados.
        </p>
        {/* Se pasa el evento onClick al componente Button */}
        <Button text="Contáctanos" onClick={handleContact} />
      </section>
      {/* Renderiza el componente Tarjeta que muestra los planes disponibles */}
      <Tarjeta />
    </main>
  );
}
