const inputRepo = document.getElementById('reposicao');
const radioSim = document.getElementById('sim');
const radioNao = document.getElementById('nao');
const texto = document.getElementById('texto');

function alteracaoDoCampo() {
    if (radioNao.checked) {
        inputRepo.disabled = true;
        inputRepo.value = ''; // Limpa o campo
    } else {
        inputRepo.disabled = false;
        inputRepo.value = '';
    }
    texto.textContent = '';
}

radioSim.addEventListener('change', alteracaoDoCampo);
radioNao.addEventListener('change', alteracaoDoCampo);
document.addEventListener('DOMContentLoaded', alteracaoDoCampo);

function calcular() {
    let unidade1 = parseFloat(document.getElementById('u1').value);
    let unidade2 = parseFloat(document.getElementById('u2').value);
    let unidade3 = parseFloat(document.getElementById('u3').value);
    
    let reposicao;

    // Lógica:
    if (radioNao.checked) {
        let notas = [unidade1, unidade2, unidade3];
        notas.sort((a, b) => a - b);
        
        let somaMaiores = notas[1] + notas[2];
        let reposicaoC = 18 - somaMaiores;
        
        inputRepo.value = reposicaoC.toFixed(1);
        reposicao = reposicaoC;
    } else {
        reposicao = parseFloat(inputRepo.value);
    }

    let media = (unidade1 + unidade2 + unidade3) / 3;
    document.getElementById('media').value = media.toFixed(1);

    let valores = [unidade1, unidade2, unidade3, reposicao];
    valores.sort((a, b) => b - a);
    let soma = valores[0] + valores[1] + valores[2];
    let mediaFinal = soma / 3;
    document.getElementById('media-f').value = mediaFinal.toFixed(1);

    if (radioNao.checked) {
        texto.textContent = '';
        return;
    }

    if (mediaFinal < 5 || reposicao < 4) {
        texto.textContent = 'Estudante reprovado por média (menor que 5,0) ou reposição (menor que 4,0)!';
        texto.style.color = 'red';
    } else {
        texto.textContent = 'Estudante aprovado!';
        texto.style.color = '#164194';
    }
}