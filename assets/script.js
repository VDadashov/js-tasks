const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const btn = document.querySelector("#btn");

function randomPs(){
    // debugger
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let password = "";
    for(let i = 0;i<num1.value ;i++){
        let randomIndex = Math.floor(Math.random()*alphabet.length);
        password += alphabet[randomIndex];
    }

    result1.innerHTML = password;
    
}


btn.addEventListener('click',randomPs);




