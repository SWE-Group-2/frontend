FROM node:lts-alpine

ARG VITE_GOOGLE_CLIENT_ID
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN echo "VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID" > .env

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
