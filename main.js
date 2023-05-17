
function answerQuestion(name) {
    var radioName = document.getElementsByName(name);
    console.log(radioName)

    for (let i = 0; i < radioName.length; i++) {
        var radioValue = radioName[i];
        console.log(radioValue)

        if (radioValue.value === 'e') {
            radioValue.parentElement.classList.add('opcao-errada');
            radioValue.parentElement.style.opacity = 0.5;
        }

        if (radioValue.value === 'c') {
            radioValue.parentElement.classList.add('opcao-correta');
            radioValue.parentElement.style.fontWeight = 500;
        }

        if (radioValue.value === 'c' && radioValue.checked) {
            let span = document.getElementById(name);
            span.innerText = 'Você acertou!';
        } else {
            let span = document.getElementById(name);
            span.innerText = 'Você errou!';
        }
    }
}