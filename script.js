const imgS = document.querySelector("#imgS")
console.log(imgS)

const inputS = document.querySelector(".input-search ")
console.log(inputS)

inputS.classList.remove("active");

imgS.addEventListener("click", function(){
    inputS.classList.add("active")

});






