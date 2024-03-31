const form = document.getElementById('form-valores');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const valorAInput = document.getElementById('valor-a');
    const valorBInput = document.getElementById('valor-b');

    const valorA = parseFloat(valorAInput.value);
    const valorB = parseFloat(valorBInput.value);

    const mensagemFalso = `Tente outra vez, o primeiro valor é maior do que o segundo.`;
    const mensagemVerdade = `Correto, o segundo valor de <b>${valorB}</b> é maior do que o primeiro valor de <b>${valorA}</b>.`;

    if(valorA >= valorB){
        const containerFalso = document.querySelector('.error-message');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
    else{     
        const containerVerdade = document.querySelector('.success-message');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    }
})