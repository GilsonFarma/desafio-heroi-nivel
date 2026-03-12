let classificacao = null;
let nome = 'Gilson';
const totalXp = 7050;

if (totalXp < 1000) {
    classificacao = 'ferro';
} else if (totalXp < 2000) {
    classificacao = 'Bronze';
} else if (totalXp < 5000) {
    classificacao = 'Prata';
} else if (totalXp < 7000) {
    classificacao = 'Ouro'} 
    else if (totalXp < 8000) {
    classificacao = 'Platina';
} else if (totalXp < 9000) {
    classificacao = 'Ascente';
} else if (totalXp < 10000) {
    classificacao = 'Imortal';
} else  {
    classificacao = 'Radiante';
} 

console.log("O Herói de nome " + nome + " ,está no nível de " + classificacao);