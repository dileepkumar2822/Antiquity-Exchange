CREATE DATABASE antiquity_exchange;
USE antiquity_exchange;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150),
  description TEXT,
  start_price DECIMAL(10,2),
  image VARCHAR(255),
  end_time DATETIME
);

CREATE TABLE bids (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item_id INT,
  bidder VARCHAR(100),
  amount DECIMAL(10,2),
  bid_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
