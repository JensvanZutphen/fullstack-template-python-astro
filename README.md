# fullstack-template-python-astro
## Overview

This is a fullstack template using Python for the backend and Astro for the frontend. It provides a starting point for building web applications with a modern frontend and a robust backend.

## Features

- Python backend with Flask
- Astro frontend
- Docker support for easy deployment

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 22+
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/JensvanZutphen/fullstack-template-python-astro.git
    cd fullstack-template-python-astro
    ```

2. Set up the backend:
    ```sh
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Set up the frontend:
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    flask run
    ```

2. Start the frontend server:
    ```sh
    cd ../frontend
    npm start
    ```

### Docker

To run the application using Docker:

1. Build the Docker images:
    ```sh
    docker-compose build
    ```

2. Start the containers:
    ```sh
    docker-compose up
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.