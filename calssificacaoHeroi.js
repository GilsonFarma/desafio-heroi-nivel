const form = document.getElementById('formHeroi'); //lÊ os dados do HTML
const campoNome = document.getElementById('name');
const campoXp = document.getElementById('xp');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let classificacao = null;
    const nome = campoNome.value; // PEGA OS DADOS QUE FORAM ESCRITOS NO CAMPO (APANHEI MT AQUI)
    const totalXp = Number(campoXp.value); // TRANSFORMA EM NUMERO O QUE FOI ESCRITO PRA NAO CAIR COMO STRING.

    if (totalXp < 1000) {   //ESSE AQUI É A FUNÇÃO, FACIL DMS 
        classificacao = 'Ferro';
    } else if (totalXp < 2000) {
        classificacao = 'Bronze';
    } else if (totalXp < 5000) {
        classificacao = 'Prata';
    } else if (totalXp < 7000) {
        classificacao = 'Ouro';
    } else if (totalXp < 8000) {
        classificacao = 'Platina';
    } else if (totalXp < 9000) {
        classificacao = 'Ascendente';
    } else if (totalXp < 10000) {
        classificacao = 'Imortal';
    } else {
        classificacao = 'Radiante';
    }

    resultado.textContent = `O herói ${nome} está no Rank ${classificacao}`
});