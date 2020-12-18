# Kickz-R-Us
## Description 
An express backend database to store SignUp and product information. There is a one to many relationship between user and shoes. After sign up, user will have ability to add products to database and each shoe in database will store userId which acts as foreign key. 

# Deployed Application 

# Screenshots
## ERD
* User will have ability to sign up and information will store in database. After sign up, User will have ability to post shoes to profile and this information will post to database along with foreign key of userId to each shoe.
![ERD](https://i.imgur.com/BwJx4pH.png) <br>
* PostGres SQL 
![Database](https://i.imgur.com/fcSbYZh.png) <br>

# Routes 
### Get all Shoes
* GET - localhost:3000/api/shoes
#### Get a Shoe
* GET - localhost:3000/api/shoes/1
### Update a Shoe
* PUT - localhost:3000/api/shoes/1
### Create a Shoe
* POST - localhost:3000/api/shoes
### Delete a User Shoe
* DEL - localhost:3000/api/shoes/2
### Sign Up
* POST - localhost:3000/api/auth/signup
### Login
* POST - localhost:3000/api/auth/login
### Get User
* GET - localhost:3000/api/users/profile/4
### Get All Users
* GET - localhost:3000/api/users
### Delete User
* DEL - localhost:3000/api/users/1
### Update User
* PUT - localhost:3000/api/users/2



# Technology Used
* CSS5 <br>
* ES6 <br>
* HTML5 <br>
* NPX <br>
* NPM <br>

# Installation 
* None needed to use

# Future Plans 
* Add user watchlist to database
* Integration of MongoDb. Grabbing data from one api transferring to next.