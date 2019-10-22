# Add Base Image
FROM node:alpine

# Change Working Directory from Root
WORKDIR /usr/app

# Add Dependencies and execute
COPY package.json ./
RUN npm install
COPY . .

# Default Command Line
CMD ["npm","start"]