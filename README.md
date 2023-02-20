# LaceUP An ecommers site for booking Branded shoes
#Description
I have developed a REST API for the ecommers websit.This API performs all the fundamental CRUD operations of any ecommers platform with user validation at every step.
This is an Individual Project
# Techstack
MongoDB
Node.js
Express
HTML 5
CSS 3
Javascript
Boosttrap
# Features
User and Admin authentication & validation with session uuid having.
<br>
Admin Features:
Administrator Role of the entire application
Only registered admins with valid session token can add/update/delete driver or customer from main database
Admin can access the details of Products in the site.
Customer Features:
Registering themselves with application, and logging in to get the valid session token
Viewing list of available Products with filtration of catagory and Placing a order.
Only logged in users can update his/her profile updation and other features.
Payment feature with generating random OTP
#Modules
User Module
Cart Module
Favirote Module
Payment Module
Feedback Module
Masterdata Module
#API Module Endpoints
---->>> We have to use this globle line before every endpoin https://good-puce-coati-hat.cyclic.app
-> POST   /user/register : Registering the user(Creating the account).
-> POST   /user/login : Logging in user with valid email & password.
-> PATCH  /user/update : To update user detials (image,name,number,email).
-> DELETE /user/admin/delete:userid : To delete a user account for admin.
-> GET    /user/admin/:userid : To get a user by his id
-> GET    /user/admin/allusers : To get all users
-> GET    /user/cart : Get the all cart items(Authorization required).
-> POST   /user/cart : To push the items to the cart (Authorization required)
-> DELETE /user/cart/delete/:cartitemid :This will delete the item in the cart(Authorization required)
-> GET    /user/fav : Get the all favirote items(Authorization required).
-> POST   /user/fav : To push the items to the favirote (Authorization required)
-> DELETE /user/fav/delete/:cartitemid :This will delete the item in the favirote(Authorization required)
-> POST   /user/payment : To make the payment(Authorization required)
-> GET    /user/payment : To Get the history of the user payment and buyed products(Authorization required)
-> POST   /user/feedback : To post the user feedback
-> GET    /user/feedback : To get the feedbacks posted by the users
# Demo
Deployed Link : https://effortless-daffodil-5b9af6.netlify.app/
