function calcular() {
    let unidade1 = parseFloat(document.getElementById('u1').value);
    let unidade2 = parseFloat(document.getElementById('u2').value);
    let unidade3 = parseFloat(document.getElementById('u3').value);
    let reposicao = parseFloat(document.getElementById('reposicao').value);
    
    let media = (unidade1 + unidade2 + unidade3) / 3;
    document.getElementById('media').value = media.toFixed(1);
    
    let valores = [unidade1, unidade2, unidade3, reposicao];
    valores.sort((a, b) => b - a);
    let soma = valores[0] + valores[1] + valores[2];
    let mediaFinal = soma / 3;
    document.getElementById('media-f').value = mediaFinal.toFixed(1);
}