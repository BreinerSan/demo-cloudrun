# Usa una imagen base de Node.js
FROM node:21-slim

# Crea un directorio para la aplicación dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm ci --only=production --omit=dev

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto 8080 para Cloud Run
EXPOSE 8080

# Comando para iniciar la aplicación
ENTRYPOINT ["npm", "run", "start"]
