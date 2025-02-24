import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap para estilos predeterminados
import './globals.css'; // Importa los estilos globales personalizados
import { ReactNode } from 'react';

// Metadatos de la aplicación, útiles para SEO y descripción
export const metadata = {
  title: 'Planes de Páginas Web',
  description: 'Ejemplo dinámico con tarjetas y modal',
};

// Componente RootLayout que envuelve toda la aplicación
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Aquí se inyectan todos los componentes de la aplicación */}
        {children}
      </body>
    </html>
  );
}
