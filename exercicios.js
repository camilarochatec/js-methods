let impares = [1,2,3,4,5,6,7,8,9,10].filter(number => number % 2 != 0);
let divisiveisPorTres = impares.filter(number => number % 3 == 0);

document.write(`<h1>Os valores impares do array numeros são: ${impares}</h1>`);
document.write(`<h1>Os valores divisiveis por 3 são: ${divisiveisPorTres}</h1>`);

let words = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

document.write(`<h1>A qnt de letras de cada nome fica: ${
    words.map(word => word.length)
}</h1>`)

document.write(`<h1>O array ordenado fica: ${
    words.map(word => word.length).sort()
}</h1>`)


let data = '2024-11-13 11:35:00';



