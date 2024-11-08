
# Node Shopping API

The Node Shopping API is a RESTful service built with Node.js and Express.js, designed to manage products, orders, and users for an e-commerce platform.

## Features

- **User Management**: Register, authenticate, and manage user profiles.
- **Product Management**: Create, read, update, and delete products.
- **Order Processing**: Handle order creation, updates, and retrieval.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/3laaElsadany/node-shopping-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd node-shopping-api
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Usage

1. **Start the server**:

   ```bash
   npm start
   ```

2. **Access the API**:

   The API will be available at `http://localhost:3000`.

## API Endpoints

- **Users**:
  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Authenticate a user.
  - `GET /users/:id`: Retrieve user details.

- **Products**:
  - `GET /products`: List all products.
  - `POST /products`: Add a new product.
  - `PUT /products/:id`: Update product details.
  - `DELETE /products/:id`: Delete a product.

- **Orders**:
  - `POST /orders`: Create a new order.
  - `GET /orders/:id`: Retrieve order details.
  - `PUT /orders/:id`: Update an order.
  - `DELETE /orders/:id`: Cancel an order.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


