FROM node:16-alpine

# add environment variables to get create-react-app to work correctly in docker
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]