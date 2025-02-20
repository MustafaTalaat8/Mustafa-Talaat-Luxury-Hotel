btn = document.getElementById("btn")
card1 = document.getElementById("sec")
card2 = document.getElementById("sec2")
btn.addEventListener("click", function(){
    card1.classList.remove("d-none")
    card2.classList.remove("d-none")
    btn.classList.add("d-none")
})