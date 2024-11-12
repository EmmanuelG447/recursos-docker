# Etapa 1: Construcción de la aplicación
FROM node:18 AS build

WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias y compilar la app
COPY .env . 
COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiar el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos generados de la compilación de Vite a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 5173
EXPOSE 5173

# Comando para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
