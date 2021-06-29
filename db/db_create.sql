CREATE DATABASE adoptablesite;

CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    avatar VARCHAR(255) DEFAULT 'avatar.png',
    role INT DEFAULT 1
);

CREATE TABLE userspets(
    id SERIAL PRIMARY KEY,
    pet_id INT,
    owner_id INT,
    date_created TIMESTAMP DEFAULT NOW()
);