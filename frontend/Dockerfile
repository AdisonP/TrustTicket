FROM node:latest
WORKDIR /front
ENV PATH /App/node_modules/.bin:$PATH
COPY package*.json ./
run npm install
COPY . .
CMD ["npm","run","dev"]