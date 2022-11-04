FROM node:latest
WORKDIR /backend
COPY package*.json ./
COPY . .
RUN npm i
EXPOSE 8080
CMD ["npm", "run", "start"]