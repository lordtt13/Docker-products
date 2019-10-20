# Download Base Image (Compact)
FROM node:alpine

# Move Work Dir away from Root
WORKDIR /usr/app

# Get Local Files to Container FS
COPY ./package.json ./

# Download Dependencies
RUN npm install

# Minimizing Rebuilding and Cache Costs
COPY ./ ./

# Default Command
CMD ["npm","start"]