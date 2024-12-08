
// Ho creato il div essenziale

const backgroundDiv = document.createElement('div');
backgroundDiv.className = "background";


// Ho creato il div che conterrà tutto il counter

const containerDiv = document.createElement('div');
containerDiv.className = 'container';
containerDiv.setAttribute('role', 'main');

const title = document.createElement('h1');
title.textContent = "Contatore";
containerDiv.appendChild(title);

// Ho creato il div che conterrà il valore del counter

const counterDiv = document.createElement('div');
counterDiv.className ='counter';
counterDiv.setAttribute('aria-labelledby', 'counter-title');
counterDiv.setAttribute('role', 'region');

const valueParagraph = document.createElement("p")
valueParagraph.className = 'value';
valueParagraph.setAttribute('role', 'status');
valueParagraph.setAttribute('aria-live', 'polite');
valueParagraph.textContent = "0";
counterDiv.appendChild(valueParagraph);

// Ho creato il div dei pulsanti

const containerButton = document.createElement('div');
containerButton.className ='c-button';
containerButton.setAttribute('aria-label', 'Pulsanti di controllo');
containerButton.setAttribute('role', 'group');

const increaseButton = document.createElement('button');
increaseButton.className = 'increase';
increaseButton.setAttribute('aria-label', 'Aumenta il valore del contatore')
increaseButton.textContent = '+'
containerButton.appendChild(increaseButton);

const decreaseButton = document.createElement('button');
decreaseButton.className = 'decrease';
decreaseButton.setAttribute('aria-label', 'Diminuisci il valore del contatore')
decreaseButton.textContent = '-'
containerButton.appendChild(decreaseButton);

// Ho creato il div con le istruzioni

const containerDescription = document.createElement('div');
containerDescription.className ="counter-description";

const valueParagraphOne = document.createElement("p")
valueParagraphOne.className = "description";
valueParagraphOne.textContent = "Premi il tasto + per aumentare il valore, per decrementarlo usa il tasto - ,  usa infine il tasto reset per azzerare il contatore";

const valueParagraphTwo = document.createElement("p")
valueParagraphTwo.className = "description";
valueParagraphTwo.textContent = "Premi il tasto + per aumentare il valore, per decrementarlo usa il tasto - ,  usa infine il tasto reset per azzerare il contatore";

const valueParagraphThree = document.createElement("p")
valueParagraphThree.className = "description";
valueParagraphThree.textContent = "Premi il tasto + per aumentare il valore, per decrementarlo usa il tasto - ,  usa infine il tasto reset per azzerare il contatore";

containerDescription.appendChild(valueParagraphOne);
containerDescription.appendChild(valueParagraphTwo);
containerDescription.appendChild(valueParagraphThree);

// Ho creato il bottone reset che è figlio del primo div

const resetButton = document.createElement('button');
resetButton.className = 'reset';
resetButton.setAttribute('aria-label', 'Azzera il valore')
resetButton.textContent = 'Reset'


containerDiv.appendChild(counterDiv);
containerDiv.appendChild(containerButton);
containerDiv.appendChild(containerDescription);
containerDiv.appendChild(resetButton);

// Ho aggiunto il contenitore principale al body
backgroundDiv.appendChild(containerDiv);
document.body.appendChild(backgroundDiv);


let value = 0;
const counterValue = document.querySelector(".value");

increaseButton.onclick = function () {
    value++;
    counterValue.innerHTML = value;
};

decreaseButton.onclick = function () {
    value--;
    counterValue.innerHTML = value;
};

resetButton.onclick = function () {
    value = 0;
    counterValue.innerHTML = value;
};



