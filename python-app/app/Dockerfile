# Utiliza una imagen base de Python
FROM python:3.8-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto en el que corre la aplicación
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["python", "app.py"]
