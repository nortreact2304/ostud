const originaal = [
    'valge',
    'punane',
    'kollane'
]

const mitteKoopia = originaal

mitteKoopia.push('must')

console.log(originaal)

//const koopia = originaal.map(e => e) - üks moodus uue massiivi loomiseks
const koopia = [...originaal, 'roosa']
koopia.push('oranz')
console.log(originaal)
console.log(koopia)