function displayUsers(users){
    document.querySelector("tbody").innerHTML=""
    users.forEach((myUser,i )=> {
        var  myTr=document.createElement("tr")
          
          for(a in myUser){
          var  myTd=document.createElement("td")
            myTd.innerHTML= myUser[a]
            myTr.appendChild(myTd)
          }
          editTd=document.createElement("td")
          editBtn=document.createElement("button")
          editBtn.innerHTML="EDIT"
          editTd.appendChild(editBtn)
          myTr.appendChild(editTd)
    
          deleteTd=document.createElement("td")
          deleteBtn=document.createElement("button")
          deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
          deleteBtn.innerHTML="DELETE"
          deleteTd.appendChild(deleteBtn)
          myTr.appendChild(deleteTd)
    

          document.querySelector("tbody").appendChild(myTr)
        });
}
displayUsers(users)
