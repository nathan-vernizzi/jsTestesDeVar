const carros = [
    {nome:"Tesla", uso:"novo"},
    {nome:"Berlinda", uso:"usado"},
    {nome:"Fusca", uso:"usado"},
    {nome:"Uno", uso:"novo"},
    {nome:"Gol bola", uso:"usado"}
]

let saidaUsado="";
let saidaNovo="";

carros.forEach(copiaCarros=>{
    if(copiaCarros.uso ==='novo'){
        saidaNovo += `Nome: ${copiaCarros.nome}<br>`
    }
    else if(copiaCarros.uso ==='usado'){
        saidaUsado += `Nome: ${copiaCarros.nome}<br>`
    }
})

document.getElementById("carroUsados").innerHTML = saidaUsado
document.getElementById("carroNovos").innerHTML = saidaNovo