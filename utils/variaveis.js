const configLocal = JSON.parse(open('../config/config.local.json'));

export  function pegarBaseURL() {
    return __ENV.baseURL || configLocal.baseURL;
   
}

//__ENV.baseURL pode vim setada na exeucução do k6 atraves do -e BASE_URL=http://localhost:3000
//configLocal está recebendo a configuraçao do baseURL que está dentro do arquvivo ../config/config.local.json
// poderia usar só .env tbm mas não foi tratado nesse exemplo.
