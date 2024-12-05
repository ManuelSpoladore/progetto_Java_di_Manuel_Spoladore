let value = 0
const counterValue = document.querySelector(".value");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");

// increase.addEventListener('click', => {


// }) 

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





{/* <script>
        // <!-- funzione anonima, sono funzioni che non hanno nome, ma che chiamiamo in altro modo -->
        const myButton = document.querySelector('button');

        myButton.onclick = function () {
            alert('hello');
        }

    </script> */}