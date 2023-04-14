"use strict"



const count = document.querySelector(".count")
const add = document.querySelector(".add")
const resetCount = document.querySelector(".reset")
const sub = document.querySelector(".subtract")
const buttons = document.querySelector(".buttons")



buttons.addEventListener("click", function (e) {
    if (e.target.classList.contains("add")) {
        count.innerHTML++
        setColor()
    }
    else if (e.target.classList.contains("subtract")) {
        count.innerHTML--
        setColor()
    }
    else if (e.target.classList.contains("reset")) {
        count.innerHTML = 0
        setColor()
    }

})

const setColor = () => {
    if (count.innerHTML > 0) {
        count.style.color = "yellow"
    }

    else if (count.innerHTML < 0) {
        count.style.color = "red"
    }

    else {
        count.style.color = "#fff"
    }



}





// add.addEventListener("click", function () {
//     count.innerHTML++
// })
// sub.addEventListener("click", function () {
//     count.innerHTML--
// })
// resetCount.addEventListener("click", function () {
//     count.innerHTML = 0
// })
