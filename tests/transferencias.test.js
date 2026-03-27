import http from 'k6/http';
import { sleep, check } from 'k6';
import { pegarBaseURL } from '../utils/variaveis.js';
import { obterToken } from '../helpers/autenticacao.js';
const postTransferencias  = JSON.parse(open('../fixtures/postTransferencias.json'));

export const options = {
  iterations: 10
};

export default function () {
  const token = obterToken();

  const url = pegarBaseURL() + '/transferencias';
  const payload = JSON.stringify(postTransferencias);
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };

  let res = http.post(url, payload, params);
  //console.log(res.status, res.body);

  check(res, {
    "Transferência realizada com sucesso. 201": (res) => res.status === 201
  });

  sleep(1);
}
