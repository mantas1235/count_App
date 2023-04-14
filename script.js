"use strict"



const count = document.querySelector(".count")
const add = document.querySelector(".add")
const resetCount = document.querySelector(".reset")
const sub = document.querySelector(".subtract")


add.addEventListener("click", function () {
    count.innerHTML++
})
sub.addEventListener("click", function () {
    count.innerHTML--
})
resetCount.addEventListener("click", function () {
    count.innerHTML = 0
})
