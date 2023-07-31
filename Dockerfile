FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install all app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy project builded source
COPY . .

# exposing internal port
EXPOSE 3000

#running comand to start project
CMD ["node", "./build/index.js"]
