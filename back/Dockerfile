# Usar una imagen base de Node en Alpine
FROM node:18.17.1-alpine

# Crear el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copiar los archivos de dependencias al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Instalar curl y la CLI de Stripe en Alpine
RUN apk add --no-cache curl && \
    curl -fsSL https://stripe.com/install-cli | sh

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto 7000
EXPOSE 7000

# Comando CMD para iniciar la aplicación
CMD ["npm", "run", "dev"]
