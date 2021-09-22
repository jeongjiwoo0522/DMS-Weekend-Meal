FROM node:15.8.0-alpine3.10

WORKDIR /root

COPY . .

RUN npm install 
RUN npx tsc

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "./dist/index.js"]
