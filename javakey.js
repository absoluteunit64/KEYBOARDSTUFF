function Keyprfess(){
  document.getElementById(event.code).style.backgroundColor = "blue";
}
function Keyprress(){
  document.getElementById(event.code).style.backgroundColor = "black";
}


document.addEventListener("keydown", Keyprfess);
document.addEventListener("keyup", Keyprress);
