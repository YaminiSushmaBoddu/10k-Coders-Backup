function deleteUser(i){
  users=users.filter((element,index) => {
    return i!==index
  });
  displayUsers(users)
}