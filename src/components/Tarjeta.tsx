'use client'; // Se declara como Client Component para manejar eventos en botones

import React from 'react';

// Definición de la interfaz que representa cada plan
interface Plan {
  id: number;
  titulo: string;
  descripcion: string;
  precio?: string; // Se vuelve opcional para no mostrarlo si está vacío
  botonTexto: string;
  infoExtra: string;
  caracteristicas: string[]; // Nuevas características del plan
  isPopular?: boolean; // Indica si el plan es el más popular (opcional)
}

// Arreglo de objetos que contiene la información de cada plan (solo 3 opciones)
const planes: Plan[] = [
  {
    id: 1,
    titulo: 'Básica',
    descripcion: 'Ideal para pequeños negocios o portafolios personales.',
    precio: '',
    botonTexto: 'Contratar',
    infoExtra: 'Pago único',
    caracteristicas: [
      'Hosting básico',
      'Soporte por email',
      'Diseño responsivo'
    ],
  },
  {
    id: 2,
    titulo: 'Intermedia',
    descripcion: 'Diseño profesional con múltiples secciones y SEO optimizado.',
    precio: '',
    botonTexto: 'Contratar',
    infoExtra: '50% adelantado, 50% al finalizar',
    caracteristicas: [
      'Dominio personalizado',
      'SEO optimizado',
      'Mantenimiento periódico',
      'Integración con redes sociales'
    ],
    isPopular: true,
  },
  {
    id: 3,
    titulo: 'Personalizada',
    descripcion: 'Solución web a la medida con integración avanzada.',
    precio: '',
    botonTexto: 'Cotizar',
    infoExtra: 'Consulta interna',
    caracteristicas: [
      'Desarrollo a medida',
      'Integración avanzada',
      'Consultoría personalizada',
      'Soporte prioritario'
    ],
  },
];

// Función para manejar la acción al hacer clic en cualquier plan
const handlePlanAction = (plan: Plan) => {
  alert(`Acción para el plan: ${plan.titulo}`);
};

// Componente que renderiza la grilla de tarjetas de planes
export default function Tarjeta() {
  return (
    <>
      {/* Sección de encabezado con título y descripción */}
      <section className="text-center mb-5">
        <h2 className="plan-title">Nuestros Planes</h2>
        <p className="plan-subtitle">Elige el plan que mejor se adapte a tus necesidades</p>
      </section>
      
      <div className="row justify-content-center">
        {planes.map((plan) => (
          <div key={plan.id} className="col-12 col-sm-8 col-md-6 col-lg-4 mb-5 d-flex">
            {plan.isPopular ? (
              <div className="card h-100 w-100 bg-dark text-white position-relative rounded-3 d-flex flex-column">
                <span className="badge bg-warning text-dark fw-semibold position-absolute top-0 end-0 m-2">
                  Más Popular
                </span>
                <div className="card-body p-5 d-flex flex-column justify-content-between text-center">
                  <div>
                    <h5 className="card-title fw-bold">{plan.titulo}</h5>
                    <p className="card-text fs-6 opacity-75">{plan.descripcion}</p>
                    {plan.precio && (
                      <h4 className="fw-bold fs-3 my-3">{plan.precio}</h4>
                    )}
                    {/* Lista de características centrada en la tarjeta, pero con elementos alineados en columna */}
                    <ul className="list-unstyled mx-auto text-start" style={{ maxWidth: '250px' }}>
                      {plan.caracteristicas.map((item, index) => (
                        <li key={index} className="d-flex align-items-start mb-1">
                          <span className="me-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <button
                      onClick={() => handlePlanAction(plan)}
                      className="btn btn-warning text-dark w-100 fw-semibold btn-ui"
                    >
                      {plan.botonTexto}
                    </button>
                    <p className="text-center text-light small mt-4">{plan.infoExtra}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card h-100 w-100 border shadow-sm rounded-3 d-flex flex-column">
                <div className="card-body p-5 d-flex flex-column justify-content-between text-center">
                  <div>
                    <h5 className="card-title fw-bold">{plan.titulo}</h5>
                    <p className="text-muted fs-6 mb-3">{plan.descripcion}</p>
                    {plan.precio && (
                      <h4 className="fw-bold fs-3 my-3">{plan.precio}</h4>
                    )}
                    {/* Lista de características centrada en la tarjeta, pero con elementos alineados en columna */}
                    <ul className="list-unstyled mx-auto text-start" style={{ maxWidth: '250px' }}>
                      {plan.caracteristicas.map((item, index) => (
                        <li key={index} className="d-flex align-items-start mb-1">
                          <span className="me-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <button
                      onClick={() => handlePlanAction(plan)}
                      className="btn btn-primary w-100 fw-semibold mt-3 btn-ui"
                    >
                      {plan.botonTexto}
                    </button>
                    <p className="text-muted small mt-4">{plan.infoExtra}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
