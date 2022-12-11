var userInfo={
    name:"",
    username:"",
    password:"",
    confirmpassword:"",
    email:"",
    msg:""

}

var gIndex=0
var users=JSON.parse(localStorage.getItem("Users"))
if(users==null){
    users=[]
}
function getUser(){
    var user=getUserFromForm()
    users.push(user)
    //storing Data
    localStorage.setItem("Users",JSON.stringify(users))
    displayUsers(users)
    console.log(user)
    clearForm()
}

function clearForm(){
    for(a in userInfo){
        document.getElementById(a).value=""
    }
}

function getUserFromForm(){
    var user={...userInfo}
    for(a in user){
        if(password.value=confirmpassword.value){
           user[a]=document.getElementById(a).value
        }
    }
    return user
}