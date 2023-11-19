let vitoria = 55
let derrota = 50

function calcularSaldo(vitoria, derrota){
	return vitoria - derrota;
}

function obterNivel(resultado){
	let nivel;
    
	switch(true){
    	case resultado < 10: 
        nivel = "Ferro"
        break
        
        case resultado <= 20: 
        nivel = "Bronze"
        break
        
        case resultado <= 50: 
        nivel = "Prata"
        break
        
        case resultado <= 80: 
        nivel = "Ouro"
        break
        
        case resultado <= 90: 
        nivel = "Diamante"
        break
        
        case resultado <= 100: 
        nivel = "Lendário"
        break
        
        default: 
        nivel = "Imortal"
        break
	}
    
    return nivel 
}

let saldo = calcularSaldo(vitoria, derrota);
let nivelDoHeroi = obterNivel(saldo);

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivelDoHeroi}`)