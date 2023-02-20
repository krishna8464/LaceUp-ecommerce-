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
Admin Features:<br>
Administrator Role of the entire application.<br>
Only registered admins with valid session token can add/update/delete driver or customer from main database.<br>
Admin can access the details of Products in the site.<br>
Customer Features:<br>
Registering themselves with application, and logging in to get the valid session token.<br>
Viewing list of available Products with filtration of catagory and Placing a order.<br>
Only logged in users can update his/her profile updation and other features.<br>
Payment feature with generating random OTP.<br>
#Modules<br>
User Module<br>
Cart Module<br>
Favirote Module<br>
Payment Module<br>
Feedback Module<br>
Masterdata Module<br>
#API Module Endpoints<br>
---->>> We have to use this globle line before every endpoin https://good-puce-coati-hat.cyclic.app   <br>
-> POST   /user/register : Registering the user(Creating the account).<br>
-> POST   /user/login : Logging in user with valid email & password.<br>
-> PATCH  /user/update : To update user detials (image,name,number,email).<br>
-> DELETE /user/admin/delete:userid : To delete a user account for admin.<br>
-> GET    /user/admin/:userid : To get a user by his id .<br>
-> GET    /user/admin/allusers : To get all users.<br>
-> GET    /user/cart : Get the all cart items(Authorization required).<br>
-> POST   /user/cart : To push the items to the cart (Authorization required).<br>
-> DELETE /user/cart/delete/:cartitemid :This will delete the item in the cart(Authorization required).<br>
-> GET    /user/fav : Get the all favirote items(Authorization required).<br>
-> POST   /user/fav : To push the items to the favirote (Authorization required).<br>
-> DELETE /user/fav/delete/:cartitemid :This will delete the item in the favirote(Authorization required).<br>
-> POST   /user/payment : To make the payment(Authorization required).<br>
-> GET    /user/payment : To Get the history of the user payment and buyed products(Authorization required).<br>
-> POST   /user/feedback : To post the user feedback.<br>
-> GET    /user/feedback : To get the feedbacks posted by the users.<br>
# Demo
Github link : https://github.com/krishna8464/-pricey-secretary-8466
Netlify Deployed Link : https://effortless-daffodil-5b9af6.netlify.app/
