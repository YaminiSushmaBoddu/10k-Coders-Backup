function editUser(i){
gIndex=i;
var newUser=users[i]
for(a in newUser){
    document.getElementById(a).value= newUser[a]
}
document.getElementById("updateUserBtn").style.display="block"
document.getElementById("getUserBtn").style.display="none"
}

function updateUser(){
   var user=getUserFromForm()
   users[gIndex]=user
   localStorage.setItem("Users",JSON.stringify(users))
    displayUsers(users)
    clearForm()

    document.getElementById("updateUserBtn").style.display="none"
document.getElementById("getUserBtn").style.display="block"
}