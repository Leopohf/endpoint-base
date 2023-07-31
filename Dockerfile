FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install all app dependencies
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["node", "./build/index.js"]
