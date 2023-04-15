"use strict"







const generateBtn = document.querySelector(".generate")

const number = document.querySelector(".number")


const generateNumber = () => {
    //generate number btw 1 and 100

    const randomNumber = Math.floor(Math.random() * 100 + 1)

    number.innerHTML = randomNumber

}

generateBtn.addEventListener("click", generateNumber)

