const arrayObjeto = [{
    titulo: 'javaScript',
    preco:25},
    {titulo:'php',
    preco:15},
    {titulo: 'java',
    preco: 30},
    {titulo:'elixir',
    preco:50},
    {titulo:'Go',
    preco:45},
    {titulo:'python',
    preco:20}]

console.log(arrayObjeto)
let maisBarato = 0

for (let i= 0; i < arrayObjeto.length; i++) {
    if (i === 0) {
        maisBarato = arrayObjeto[i]

    } else if (arrayObjeto[i].preco < maisBarato.preco ) {
        maisBarato = arrayObjeto[i]
    }
}

console.log(maisBarato)

