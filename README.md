# Module 13 Weekly Challenge - E-Commerce Back-End 

## Description

Over the past decade, E-Commerce has evolved into one of the world's leading industries. Its rapid growth can be attributed to its simplicity, user-friendly interface, reliability, and an extensive product catalog unparalleled even by the largest physical stores. However, for these platforms to thrive, a sturdy back-end infrastructure is crucial for seamless management. In this regard, our application serves as an ideal foundation for the back-end database of an e-commerce site.

## Installation

Save the repository files on your computer and unzip them into a new folder. Go to the folder, add a ".env" file and enter your details. Fill in your MySQL username for DB_USER, your password for DB_PASSWORD, and leave the pre-filled "ecommerce_db" as the database name.

## Requirements

- Node; https://nodejs.org/en
- MySQL; https://www.mysql.com/

## Usage

In your terminal (git bash or similar), type "npm install" to install the application's dependencies. Then, launch the MySQL CLI and execute "source ./db/schema.sql" to set up the database. Finally, type "node server.js" to start the application. To seed the database with sample data, you can run "node seeds/index.js" before starting the server.

Use a tool like Insomnia to interact with the server. The default PORT is 3001, so the server address is "http://localhost:3001/". For backend operations, all routes begin with "/api" and are followed by the specific model: "/api/categories/" for categories, "/api/products/" for products, and "/api/tags/" for tags. To retrieve or add entries, make GET or POST requests to these addresses. For single entry retrieval, or updating/deleting an entry, append the specific ID, like "http://localhost:3001/api/categories/4".

## Demo

Vide Demo here: ![image](https://github.com/stavrospana/E-Commerce-Back-End-Module-13/assets/138176781/7ff6e36d-de1d-4909-98d5-a6bcb300cfd1)



## License

Operates under a standard MIT license. For more information, refer to the LICENSE file in the repository, or visit the following website; https://opensource.org/licenses/MIT.
