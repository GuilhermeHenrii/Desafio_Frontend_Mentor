const numbersButtons = document.querySelectorAll('.button-number');
let lastClicked = null;
const submitButton = document.querySelector('.button-submit');

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('button-number')) {
        if (lastClicked && lastClicked !== el) {
            lastClicked.classList.remove('new-color'); // Remove a classe do último botão clicado
        }
        el.classList.add('new-color'); //Adiciona a classe ao botão atual
        lastClicked = el; //Atualiza a referência para o último botão clicado
        localStorage.setItem('lastClicked', lastClicked.value);
    }
});


submitButton.addEventListener('click', (e) =>{
    if(lastClicked){
        alert('Deseja continuar?')
        window.location.href = 'tanks_page/index.html';
    }else{
        alert('Escolha uma das opções!')
    }
});

localStorage.setItem('lastClicked', 'lastClicked');