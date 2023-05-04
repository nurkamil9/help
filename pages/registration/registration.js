const input = document.querySelectorAll("input")
console.log("input: ", input);
const select = document.querySelectorAll("select")
const btn = document.querySelector("#btn")
const h1 = document.querySelector("h1")
const happy = document.querySelector(".dateHappy")

const users = []

btn.onclick=(strFunck)=>{

   const user = {
        nam:input[0].value,
        userName:input[1].value,
        login:input[2].value,
        password:input[3].value
    
       }
       users.push(user)
       console.log("users: ", users);
      
        
        
      strFunck.preventDefault()
      h1.innerHTML = `добро пожаловать  ${user.nam }  вы прошли через регистрацию`
      input[0].style.display='none'
      input[1].style.display='none'
      input[2].style.display='none'
      input[3].style.display='none'
      input[4].style.display='none'
      btn.style.display = 'none'
      select[0].style.display='none'
      select[1].style.display='none'
      select[2].style.display='none'
      happy.style.display='none'

      console.log(users);

     
}

