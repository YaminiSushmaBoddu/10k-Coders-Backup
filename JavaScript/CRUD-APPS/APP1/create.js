var userInfo = {
    university: "",
    institute: "",
    branch: "",
    degree: "",
    course: "",
    percentage: "",
    sem: "",
    exp: "",
    languages: [],
    blog: ""
}
var users = JSON.parse(localStorage.getItem("Users"))
if (users == null) {
    users = []
}
var gIndex=0;
//var users=[]
var allradiobtns = document.getElementsByName("course")
var checkBoxes = document.getElementsByName("language")
function getUser() {
     var user=getUserFromForm()
    users.push(user)
    //storing Data
    localStorage.setItem("Users", JSON.stringify(users))
    displayUsers(users)
    console.log(user)
    clearForm()
}

function clearForm() {
    for (a in userInfo) {
        if (a !== "course" && a !== "languages") {
            document.getElementById(a).value = ""
        }
        else {
            allradiobtns.forEach((e) => {
                e.checked = false
            })
            checkBoxes.forEach((cb) => {
                cb.checked = false
            })
        }
    }
}

function getUserFromForm(){
    var user = {...userInfo}
    for (a in user) {
        if (a == "course") {
            allradiobtns.forEach((element) => {
                if (element.checked == true) {
                    user[a] = element.value
                }
            })
        }
        else if (a == "languages") {
            checkBoxes.forEach((e) => {
                if (e.checked == true) {
                    user.languages.push(e.value)
                }
            })
        }
        else {
            user[a] = document.getElementById(a).value
        }
    }
    return user
}