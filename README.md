Documentation:

Folder structure:

node_endpoints/
├── controllers/
│   ├── productController.js
│   └── userController.js
├── models/
│   ├── productModel.js
│   └── userModel.js
├── routes/
│   ├── productRoutes.js
│   └── userRoutes.js
├── .env
├── server.js
├── config.js
└── package.json


Note : to run this project in your system
run command in terminal:
1. npm install
2. npm start

Note: please keep the PostgreSQL db server instance running

given the db backup file userProductDb in custom format.

CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';


CREATE DATABASE user_product_db;
\c user_product_db

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);


GRANT ALL PRIVILEGES ON TABLE users TO myuser;
GRANT ALL PRIVILEGES ON TABLE products TO myuser;

------------------------------------------------------------------

1. Register User Endpoint
Click on your collection name (e.g., "User-Product API").

Click the + Add a request button.

Name your request register_user.

Set the HTTP method to POST.

Set the URL to http://localhost:3000/users/register.

Go to the Body tab, select raw, and set the body type to JSON.

{
  "username": "Vikas",
  "password": "testpassword"
}

2.POST
login_user

api url: http://localhost:3000/users/login

Body
raw (json)

{
  "username": "Vikas",
  "password": "testpassword"
}

3.GET
fetchAll_products

http://localhost:3000/products

Authorization
Bearer Token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcxNzA3OTQ1M30.e01sMGWgPT35HcFAwHoyk4c2QD-uUjC04BKT-41fudI

demo token

4.POST
create_products

http://localhost:3000/products

Authorization
Bearer Token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcxNzA3OTQ1M30.e01sMGWgPT35HcFAwHoyk4c2QD-uUjC04BKT-41fudI

Body
raw (json)

{
  "name": "Watch",
  "description": "Leather wrist golden watch",
  "price": 1500
}

5.PUT
update_product

http://localhost:3000/products/1

Authorization
Bearer Token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcxNzA3OTQ1M30.e01sMGWgPT35HcFAwHoyk4c2QD-uUjC04BKT-41fudI

Body
raw (json)
{
  "name": "Laptop-Apple-Hp-Dell",
  "description": "lappy with 1tb hdd,16gb ram,1002hz processor",
  "price": 150000
}

6.DELETE
delete_product

http://localhost:3000/products/3

Authorization
Bearer Token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcxNzA3OTQ1M30.e01sMGWgPT35HcFAwHoyk4c2QD-uUjC04BKT-41fudI

Demo video link: https://screenrec.com/share/bmvhHD0ZNY





