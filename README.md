Repositorio de Ejemplos de Docker

Este repositorio contiene varios ejemplos de Dockerfiles organizados por tecnologías. Está diseñado para demostrar mi experiencia utilizando Docker en un rol de ingeniero DevOps. Cada carpeta dentro del repositorio representa un ejemplo específico y contiene su respectivo Dockerfile para ejecutar el ejemplo.
Estructura del Repositorio
Ejemplo estructura:

    node-app/
        Dockerfile
        Otros archivos necesarios para el ejemplo de la aplicación Node.js

    python-app/
        Dockerfile
        Otros archivos necesarios para el ejemplo de la aplicación Python

    java-app/
        Dockerfile
        Otros archivos necesarios para el ejemplo de la aplicación Java

Cómo Ejecutar los Ejemplos

Para ejecutar cualquiera de los ejemplos, sigue los siguientes pasos:

    Clona el repositorio:

    bash

git clone https://github.com/darkcode02/tu-repositorio.git
cd aplications-with-docker

Navega a la carpeta del ejemplo que deseas ejecutar, por ejemplo, node-app:

bash

cd node-app

Construye la imagen de Docker usando el Dockerfile proporcionado:

bash

docker build -t nombre-de-la-imagen .

Ejecuta el contenedor:

bash

    docker run -d -p 80:80 nombre-de-la-imagen

    Nota: Ajusta los puertos y otros parámetros según sea necesario para cada ejemplo.

Contribuciones

Si deseas contribuir con más ejemplos o mejoras, por favor abre un issue o envía un pull request.
Contacto

Para cualquier consulta, puedes contactarme a través de juan.pablo.arias.0204@gmail.com o visitar mi perfil de https://www.linkedin.com/in/juan-pablo-arias-betancur-4ab078256/.
