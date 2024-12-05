let value = 0
const counterValue = document.querySelector(".value");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");


btnIncrease.onclick = function () {
    value++;
    counterValue.innerHTML= value;
}
btnDecrease.onclick = function () {
    value--;
    counterValue.innerHTML= value;
}

btnReset.onclick = function () {
    value = 0
    counterValue.innerHTML = value;
}
