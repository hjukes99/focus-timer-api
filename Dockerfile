FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
CMD ["node", "-e", "console.log('Scaffold container ready')"]
