FROM node:lts

WORKDIR /usr/src/app

RUN apk add --no-cache git

COPY package.json ./

RUN npm install

RUN npm install -g next

COPY . .

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE 3000