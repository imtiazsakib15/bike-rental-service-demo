# 🚲 Bike Rental Service Backend

This is the backend of the **Bike Rental Service** web app, providing API endpoints for user management, bike rentals, and booking features. The backend is built with Node.js, Express, MongoDB, and TypeScript.

## Features

- 🛠 **User Management**: Registration, login, and role-based access (admin/user).
- 🚴 **Bike Management**: Add, update, and view available bikes for rental.
- 📅 **Booking System**: Book a bike, manage rental times, and return bikes.
- 🛡 **Authentication**: JWT-based authentication with refresh token mechanism.
- 📈 **Pricing Calculation**: Automatic cost calculation based on rental duration.

## 🛠 Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (Mongoose ODM)
- **Validation**: Zod
- **Authentication**: JWT (JSON Web Token)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/imtiazsakib15/bike-rental-service.git
   cd bike-rental-service
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables: Create a .env file at the root of your project and configure it:

   ```bash
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your_database_url
   BCRYPT_SALT_ROUNDS=number_of_bcrypt_salt_rounds
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRES_IN=your_access_token_expires_in
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRES_IN=your_refresh_token_expires_in
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

The backend will be running at http://localhost:5000.
