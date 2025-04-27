
# Node Shopping API

The Node Shopping API is a RESTful service built with Node.js and Express.js, designed to manage products, orders, and users for an e-commerce platform.

## Features

- **User Management**: Register, authenticate, and manage user profiles.
- **Product Management**: Create, read, update, and delete products.
- **Order Processing**: Handle order creation, updates, and retrieval.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/3laaElsadany/node_shopping_api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd node_shopping_api
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
  - `POST /users/signup`: Sign Up a new user.
  - `GET /users/signin`: Authenticate a user.
  - `PATCH /users/updateuser/:id`: Update user details.
  - `DELETE /users/deleteuser/:id`: Delete user.

- **Products**:
  - `GET /products`: List all products.
  - `GET /products/:id`: Get specific product.
  - `POST /products/addproduct`: Add a new product.
  - `Patch /products/:id`: Update product details.
  - `DELETE /products/:id`: Delete a product.

- **Orders**:
  - `GET /orders`: List all orders.
  - `POST /orders/addorder`: Create a new order.
  - `Patch /orders/updateorder/:id`: Update an order.
  - `DELETE /orders/:id`: Cancel an order.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


