function editUser(i){
   var newUser=users[i]
   gIndex=i
   for(a in newUser){
    if(a!=="course" && a!=="languages"){
        document.getElementById(a).value=newUser[a]
    }
    else if(a== "course"){
        allradiobtns.forEach((r)=>{
            if(r.value==newUser[a]){
                r.checked=true
            }
        })
    }
    else if(a == "languages"){
        checkBoxes.forEach((cb)=>{
            var check = newUser[a].find((language)=> language === cb.value);
            if(check){
                cb.checked = true
            }
        })
    }
   }
   document.getElementById("getUserBtn").style.display="none"
   document.getElementById("updateUserBtn").style.display="block"
}

function updateUser(){
    var user=getUserFromForm()
    users[gIndex]=user;
    localStorage.setItem("Users",JSON.stringify(users))
    displayUsers(users)
    clearForm()
    
    document.getElementById("getUserBtn").style.display="block"
   document.getElementById("updateUserBtn").style.display="none"
}