const name = document.querySelector("#name")
const pass = document.querySelector("#pass")
const h1 = document.querySelector(".h1")
const btn = document.querySelector(".btn")
const p =document.querySelector("p")

const users = [
    {
        login:"@gmail.com",
        password:"123"
    },
]

btn.onclick =()=>{
    console.log(name.value,users[0].login);
    console.log(pass.value,users[0].password);
    if(name.value===users[0].login){
        h1.innerHTML=`добро пожаловать`
        btn.style.display= "none"
        name.style.display="none"
        pass.style.display="none"
        p.style.display="none"

    }else{
        h1.innerHTML=`не найдено`
    }
}

let local = (function(){
 return localStorage.getItem("log")
})()


console.log(local);