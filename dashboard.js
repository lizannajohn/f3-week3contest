console.log("Dashboard");

const currentUser = JSON.parse(localStorage.getItem('currentUser'))

if(!currentUser)
{
    window.location.href = "login.html"
}

let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let alert = document.getElementById("alert")

username.innerHTML = currentUser.name;
useremail.innerHTML = currentUser.email;

let changepwdform = document.getElementById("change-pwd")

changepwdform.addEventListener("submit", function(e)
{
    e.preventDefault();

    let oldpwd = document.getElementById("oldpwd").value
    let newpwd = document.getElementById("newpwd").value
    let confnewpwd = document.getElementById("conf-newpwd").value

    if(oldpwd === "")
    {
        alert.classList.remove("hide");
        console.log("Enter PWD");
        alert.innerHTML = "Old Password must be ENTERED to proceed!"
    }
    if(oldpwd !== currentUser.pwd)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Old Password does NOT match!"
    }
    else if(newpwd === "" || confnewpwd === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords Fields should NOT be EMPTY!"   
    }
    else if(newpwd !== confnewpwd)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords DON'T match!"
    }
    else
    {
        currentUser.pwd = newpwd;
        localStorage.setItem('currentUser', JSON.stringify(currentUser))

        alert.classList.remove("hide");
        alert.innerHTML = "Password changed SUCCESSFULLY!"
        alert.style.color = "green"

        changepwdform.reset()
    }
})

let logoutbtn = document.getElementById("logout")

logoutbtn.addEventListener("click", function()
{
    localStorage.removeItem('currentUser')
    window.location.href = "index.html"
})