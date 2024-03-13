
document.getElementById('texto').addEventListener('keyup', function() {
    var textoDigitado = this.value;
    document.getElementById('mensagem').textContent = 'Você digitou: ' + textoDigitado;
});