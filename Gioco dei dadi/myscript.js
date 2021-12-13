const dadoUser = Math.floor(Math.random() * 6) + 1;
const dadoPC = Math.floor(Math.random() * 6) + 1;
let result = document.getElementById("result");

document.getElementById("dado-user").innerHTML = dadoUser;
document.getElementById("dado-pc").innerHTML = dadoPC;

if(dadoUser > dadoPC){
  result.innerHTML = "You won!";
  result.classList.add("won");
}

else if(dadoUser < dadoPC){
  document.getElementById("result").innerHTML = "You Lost!";
  result.classList.add("lose");
}

else{
  document.getElementById("result").innerHTML = "Draw!";
  result.classList.add("draw");
}

