'use client'; // Se declara como Client Component para poder usar eventos

import React from 'react';

// Define las propiedades que recibirá el componente Button
interface ButtonProps {
  text: string;            // Texto a mostrar en el botón
  onClick?: () => void;      // Evento opcional para manejar el clic
}

// Componente Button que renderiza un botón estilizado utilizando clases de Bootstrap y personalizadas
export default function Button({ text, onClick }: ButtonProps) {
  return (
    // Elemento <button> semántico que ejecuta la función onClick cuando se hace clic
    <button className="btn btn-primary btn-ui" onClick={onClick}>
      {text}
    </button>
  );
}
