const select = document.getElementById('animal');
const divs = document.querySelectorAll('.slider');

select.addEventListener('change', function() {
    const valorSelecionado = this.value;

  // Remove a classe 'ativo' de todas as divs
    divs.forEach(div => {
    div.classList.remove('ativo');
    });

  // Se houver um valor selecionado, mostra a div correspondente
    if (valorSelecionado) {
    const divAlvo = document.getElementById(valorSelecionado);
    if (divAlvo) {
        divAlvo.classList.add('ativo');
    }
    }
});
