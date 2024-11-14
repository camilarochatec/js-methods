//problema1
let impares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(number => number % 2 != 0);
let divisiveisPorTres = impares.filter(number => number % 3 == 0);

document.write(`<h1>problema 1) <br> Os valores impares do array numeros são: ${impares}</h1>`);
document.write(`<h1>problema 1b) <br>Os valores divisiveis por 3 são: ${divisiveisPorTres}</h1>`);

//problema2
let words = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

document.write(`<h1>problema 2)<br>A qnt de letras de cada nome fica: ${words.map(word => word.length)
    }</h1>`)
// [aeiou]{2,}/i: Esta é a expressão regular que busca por duas ou mais vogais consecutivas (minúsculas ou maiúsculas) essa barras são usadas para procurar padrões dentro de uma string do ininico ao fim da string. 
//A parte {2,} significa que estamos procurando por sequências de pelo menos 2 caracteres , Esse é um quantificador que indica que queremos 2 ou mais ocorrências consecutivas de qualquer um dos caracteres que definimos no conjunto , e o i no final da expressão regular torna a busca insensível ao caso (tanto faz se as vogais estão em maiúsculo ou minúsculo) O virgula após o número 2 indica que pode ser 2 ou mais (não há um limite superior especificado).
// O .test() recebe uma string como argumento e verifica se essa string satisfaz a condição da expressão regular.
// Ele retorna um valor booleano:
// true: Se a expressão regular encontrar uma correspondência na string.
// false: Se não houver correspondência.
// filter(): Este método cria um novo array contendo apenas os elementos que satisfazem a condição definida pela função fornecida, que neste caso é a verificação da presença de encontros de vogais.
document.write(`<h1>problema 2b)<br>as palavras que possuem encontros de vogais são: ${words.filter(word => /[aeiou]{2,}/i.test(word))}</h1>`)

document.write(`<h1>problema 2c)<br> O array ordenado crescente fica: ${words.map(word => word.length).sort()
    }</h1>`)

//problema3
let data = '2024-11-13 11:35:00';

document.write(`<h1>problema 3)<br> a data formatada é: ${data.split(' ')[0].split('-').join('/')}</h1>`)
document.write(`<h1>problema 3b)<br> a hora é: ${data.split(' ')[1]}</h1>`)



