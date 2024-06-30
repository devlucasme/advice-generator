// 01 - DECLARAR AS VARIÁVEIS NECESSARIAS

const button = document.querySelector('.button');
const advice = document.querySelector('.advice');
const description = document.querySelector('.description');

// 02 - CRIAR A FUNÇÃO RESPONSÁVEL POR PEGAR OS DADOS DA API

async function getApidata() {
    try {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Ocorreu um erro ao tentar buscar as informações da API');
        }

        const data = await response.json();
        advice.innerText = ` Advice #${data.slip.id}`;
        description.innerText = `"${data.slip.advice}"`;

    } catch (err) {
        console.log('Erro ao tentar buscar as informações da APi', err);
    }
}

button.addEventListener('click', getApidata);

getApidata();
