import http from 'k6/http';
import { sleep, check } from 'k6'; 
import { pegarBaseURL } from '../utils/variaveis.js';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {
    
    stages: [
        { duration: '5s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '5s', target: 0 },
    ],

    thresholds: {
        http_req_failed: ['rate<0.01'], // erros HTTP devem ser inferiores a 1%
        http_req_duration: ['p(90)<3000', 'max<5000'], // 90% das requisições e tempo máximo nao pode passar de 5000
    },
};

export default function () {
    const url = pegarBaseURL() + '/login';

    //postLogin.username = 'marcelo.souza' //manipulando dados da fixture

    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const resposta = http.post(url, payload, params);
    //console.log(resposta);

    check(resposta, {
        'Validar que o Status é 200': (r) => r.status === 200,
        'Validar se Retornou um Token': (r) => r.json().token !== null && r.json().token !== undefined,
        'Validar que o Token é String': (r) => typeof (r.json().token) == 'string'
    });

    //console.log(resposta.json().token);
    sleep(1);
}