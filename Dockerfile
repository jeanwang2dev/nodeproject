FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /app

# May install vim for debug convenience 
# RUN apt-get update && apt-get install vim -y

EXPOSE 80 8080 3000
CMD [ "node", "index.js" ]


