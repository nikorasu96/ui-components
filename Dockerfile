# Etapa de construcción: Se utiliza una imagen ligera de Node.js para compilar el proyecto
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar los archivos de configuración de npm
COPY package*.json ./

# Instalar dependencias del proyecto sin conflictos de versiones
RUN npm install --legacy-peer-deps && npm cache clean --force

# Copiar todo el código fuente al contenedor
COPY . .

# Compilar la aplicación Next.js para producción
RUN npm run build

# Etapa final: Crear un contenedor limpio para la ejecución de la aplicación
FROM node:20-alpine
WORKDIR /app

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app ./

# Instalar herramientas adicionales necesarias para ejecutar la app
RUN apk add --no-cache git bash sudo

# Crear un usuario sin privilegios para ejecutar la aplicación de forma segura
RUN addgroup -S appgroup && adduser -S appuser -G appgroup -s /bin/sh
RUN chown -R appuser:appgroup /app && chmod -R 755 /app

# Permitir que el usuario ejecute comandos sudo sin contraseña
RUN echo "appuser ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/appuser

# Ejecutar el contenedor con el usuario sin privilegios
USER appuser

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3001

# Comando para iniciar la aplicación en producción
CMD ["npm", "run", "start"]
