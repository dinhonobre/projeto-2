const form = document.getElementById('form-atividade');

const imgAprovado = 'img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = 'img src="./images/reprovado.png" alt="emoji decepcionado" />';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputnomeatividade = document.getElementById ('nome-atividade');
    const inputnotaatividade = document.getElementById ('nota-atividade');
    
    let linha = '<tr>';
    linha += `<td>${inputnomeatividade.value}</td>`;
    linha += `<td>${inputnotaatividade.value}</td>`;
    linha += `<td>${inputnotaatividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputnomeatividade.value = '';
    inputnotaatividade.value = '';

})