# Frontend Dockerfile
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose the development and debugger ports
EXPOSE 3000 9229 8969

# Default command for development
CMD ["node", "--inspect=0.0.0.0:9229", "node_modules/.bin/astro", "dev", "--port", "3000", "--host", "0.0.0.0"]
