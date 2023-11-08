let nomeDoHeroi = "Dyego"
let xpDoHeroi = 2300
let nivel

switch(true) {
    case xpDoHeroi < 1000: 
    nivel = "Ferro"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ferro`)
    break
    
    case xpDoHeroi <= 2000: 
    nivel = "Bronze"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Bronze`)
    break 
    
    case xpDoHeroi <= 5000: 
    nivel = "Prata"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Prata`)
    break
    
    case xpDoHeroi <= 7000: 
    nivel = "Ouro"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ouro`)
    break
    
    case xpDoHeroi <= 8000: 
    nivel = "Platina"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Platina`)
    break
    
    case xpDoHeroi <= 9000: 
    nivel = "Ascendente"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ascendente`)
    break
    
    case xpDoHeroi <= 10000: 
    nivel = "Imortal"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Imortal`)
    break
    
    default: 
    nivel = "Radiante"
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Radiante`)
    break
}
