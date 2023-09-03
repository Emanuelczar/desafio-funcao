let nomeDoHeroi = "Emanuelczar"
//let rank = getHeroRank(30, 5)
let difference
let wins
let defeats
let heroRank;

function getHeroRank (wins , defeats){
    let x = wins - defeats
    return x
}

function getRank (difference){
  if(difference <= 10){
    heroRank = "Ferro"
}else if (difference >= 11 && difference <= 20){
    heroRank = "Bronze"
}else if (difference >= 21 && difference <= 50){
    heroRank = "Prata"
}else if (difference >= 51 && difference <= 80){
    heroRank = "Ouro"
}else if (difference >= 81 && difference <= 90){
    heroRank = "Diamante"
}else if (difference >= 91 && difference <= 100){
    heroRank = "Lendário"
}else if (difference >= 101){
    heroRank = "Imortal"
}
return difference
}


// aqui começa as entradas


  wins = prompt("Quantas vitórias?")
  defeats = prompt("Quantas Derrotas?")
  difference = getHeroRank(wins, defeats)
  rank = getRank(difference)



window.alert(`O herói ${nomeDoHeroi} está no elo ${heroRank}, com ${wins} vitórias`)