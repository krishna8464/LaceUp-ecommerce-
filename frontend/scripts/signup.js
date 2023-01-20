let existingdata = [];
async function getData(){
try {
  let res = await fetch("http://localhost:6060/user/admin/allusers")
  let out = await res.json();
//   console.log(out)
  existingdata = out
} catch (error) {
  console.log("error")
}
}
getData();




let cont = document.getElementById("appendhere")
function signup(){
data = `
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" class="mailvalue" class="form-control" id="exampleFormControlInput1" >
</div>
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">User Name</label>
  <input type="text" class="username" class="form-control" id="exampleFormControlInput1" >
</div>
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="pasvalue" class="form-control" id="exampleFormControlInput1">
</div>
<div id="doit" class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Confirmation</label>
  <input type="password" class="conpasvalue" class="form-control" id="exampleFormControlInput1">
</div>
<div id="signupbtn"><button onclick="signupbtn()">Sign Up</button></div>
<div id="alert"></div>
`
cont.innerHTML=data
}

// console.log(existingdata)

async function signupbtn(){
    let email = document.querySelector('.mailvalue')
    let username = document.querySelector(".username")
    let password = document.querySelector('.pasvalue')
    let conpass = document.querySelector('.conpasvalue')
    let str = email.value;
    let status1=str.includes("@gmail.com")
    
    let status = false;
    existingdata.forEach((item)=>{
      if(item.email === email.value || item.username === username.value){
        status=true;
      }
    })
    if(status1===false){
      let data=`
        <br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Please Enter Correct <strong>Email!</strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
          email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
        document.querySelector('#alert').innerHTML=data
    }
    else if(email.value==="" || password.value==="" || conpass.value==="" ||username.value===""){
        let data=`
        <br>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Please Enter ALL <strong>Detials!</strong>  
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
          email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
        document.querySelector('#alert').innerHTML=data;
        // console.log("null")
    }
    else if(password.value !== conpass.value){
        // alert('Please Enter Correct Confirmation password')
        let data = `
        <br>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
           Please Enter Correct <strong>Confirmation password!</strong>  
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
        document.querySelector('#alert').innerHTML=data
    
     }else{
      let userObj={
        email : email.value.toLowerCase(),
        username : username.value,
        password :password.value
      }
      try {
        if(status){
          let data = `
          <br>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
           The detials already <strong>Existes!</strong>  
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `
          email.value = "";
          username.value="";
          password.value="";
          conpass.value="";
          document.querySelector('#alert').innerHTML=data
        }else{
        let signreq= await fetch("http://localhost:6060/user/register",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(userObj)
        })
        // let data= await signreq.json();
        //  console.log(data);
        let apdata = `
        <br>
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </symbol>
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
      </svg>
        <div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          Account creation sucessfull
        </div>
      </div>
        `
        document.querySelector('#alert').innerHTML=apdata
        setTimeout(() => {
          window.location.href="login.html"
        },2000);

        }
      } catch (error) {
        console.log("something went bad")
      }
     
     }
}