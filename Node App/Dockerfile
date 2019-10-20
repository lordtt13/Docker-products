# Download Base Image (Compact)
FROM node:alpine

# Move Work Dir away from Root
WORKDIR /usr/app

# Get Local Files to Container FS
COPY ./ ./

# Download Dependencies
RUN npm install

# Default Command
CMD ["npm","start"]