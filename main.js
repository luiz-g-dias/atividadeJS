const form = document.getElementById('form-corrida');

form.addEventListener('submit', function(e) {
    let FormTrajetoValido = false;
    e.preventDefault();

    const total = document.getElementById('total');
    const corrida = document.getElementById('corrida');

    FormTrajetoValido = parseFloat(total.value) >= parseFloat(corrida.value) 
        if(FormTrajetoValido)  {
                alert ("Valor Valido");
            } 
        else {
                alert ("Valor invalido");
            }
})

console.log(form);