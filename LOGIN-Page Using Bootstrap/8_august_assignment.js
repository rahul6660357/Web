var users = [
     {
        name: "Rahul",
        email: "abc@def.com",
        username: "Rahul0001",
        password: "Rahul",
        mobile: 9996660357
    },
    
 {
        name: "ritika",
        email: "abc@def.com",
        username: "Ritika0001",
        password: "ritika",
        mobile: 9996660345  
    },
    
     {
        name: "admin",
        email: "abc@def.com",
        username: "admin",
        password: "admin",
        mobile: 9466563079      
    }
];
document.getElementById("loginbtn").onclick=checkdetail;

function checklogin()
{
    if(localStorage.getItem("Username")==null)
    {

    }
    else{
        window.location.assign("bootstrap_assignment_final.html");
    }
}


function checkdetail()
{
var Username= document.getElementById("input1").value;
var Password= document.getElementById("input2").value;
var checker=false;

for(var i=0;i<users.length;i++)
{
    

    if(users[i].name==Username && users[i].password==Password){
        checker=true;
        localStorage.setItem("Username",Username);
         window.location.assign("bootstrap_assignment_final.html");
         break;
          } 
    }
    if(!checker){
        document.getElementById("wrongpassword").innerHTML="password and username does not match";
    }
}

function start()
{
    var Myname=localStorage.getItem("Username");

for(var i=0;i<users.length;i++)
{
    if(users[i].name==Myname)
    {
document.getElementById("name1").innerHTML=Myname;
document.getElementById("mobile1").innerHTML=users[i].mobile;
document.getElementById("email1").innerHTML=users[i].email;
    }
}
}


function Signoutme()
{
    localStorage.clear("Username");
    window.location.assign("8_august_assignment.html");
}