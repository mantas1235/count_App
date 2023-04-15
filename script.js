"use strict"


const generateBtn = document.querySelector(".generate")
const displayNumber = document.querySelector(".number")



const generateNumber = () => {
    const getRandomNumber = Math.floor(Math.random() * 100 + 1)

    displayNumber.innerHTML = getRandomNumber
}

generateBtn.addEventListener("click", generateNumber)