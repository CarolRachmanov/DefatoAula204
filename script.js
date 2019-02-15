let material = prompt("Qual será o material da sua escada")
let escadinha = material;
let tamanho = Number(prompt("Quantos degraus terá a sua escada"))

for (let i=1; i<= tamanho; i++) {
    console.log(material)
    material=material+escadinha;
}