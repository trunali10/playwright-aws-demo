# Use official Playwright base image
FROM mcr.microsoft.com/playwright:v1.38.0-jammy

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project files
COPY . .

# Install Playwright dependencies
RUN npx playwright install --with-deps

# Run tests when the container starts
CMD ["npx", "playwright", "test"]
