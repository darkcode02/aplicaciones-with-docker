FROM node:18-slim 

#create app directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*.json ./

RUN npm install 

#bundle app source 
COPY . .

EXPOSE 80

CMD [ "node","app.js" ]