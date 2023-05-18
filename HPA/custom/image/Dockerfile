FROM amd64/node:12.4.0-alpine as dev

WORKDIR /app

COPY src/package.json .
RUN npm install

COPY src .

EXPOSE 8080

CMD ["node", "app.js"]
