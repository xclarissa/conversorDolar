const converter = () => {
    var reais = document.getElementById('reais').value
    var dolar = document.getElementById('dolar').value
    var valorConvertido = reais / dolar
    document.querySelector('.paragrafo').innerHTML = `U$$ ${valorConvertido.toFixed(2)}`
}