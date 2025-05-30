# Tourist Tour Guides Website

## Project Description
This project is a comprehensive web application designed to provide tourists with detailed information about various tour guides. It includes a frontend built with Next.js 15 and a backend powered by NestJS. The application also features a PostgreSQL database and is fully dockerized for easy deployment.

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- Docker
- PostgreSQL

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the database:
   ```sh
   docker-compose up -d
   ```

4. Run database migrations:
   ```sh
   npm run migrate
   ```

## Running the Project

### Development
To start the development server, run:
```sh
npm run dev
```

### Production
To build and start the project in production mode, run:
```sh
npm run build
npm start
```

### Testing
To run tests, use:
```sh
npm test
```
