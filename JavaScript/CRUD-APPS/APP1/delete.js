function deleteUser(i){
    users=users.filter((element,index) => {
      return i!==index
    });
    localStorage.setItem("Users",users)
    displayUsers(us)
  }