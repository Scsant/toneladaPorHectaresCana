function calcularProdutividade() {
    // Obter os valores digitados pelo usuário
    const distanciaKm = parseFloat(document.getElementById('distancia').value);
    const mediaToneladas = parseFloat(document.getElementById('mediaToneladas').value);

    // Verificar se os valores são válidos
    if (isNaN(distanciaKm) || isNaN(mediaToneladas)) {
        alert('Por favor, insira valores válidos para a distância e a média de toneladas.');
        return;
    }

    // Constante para toneladas por hectare
    const constante = 6.666;

    // Calcular a produtividade em toneladas por hectare
    const produtividade = (mediaToneladas / distanciaKm) * constante;

    // Exibir o resultado na página
    document.getElementById('resultado').textContent = `A produtividade é de ${produtividade.toFixed(2)} toneladas por hectare.`;
}
