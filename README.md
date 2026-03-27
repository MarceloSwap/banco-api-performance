# banco-api-performance

Testes de performance para a [banco-api](https://github.com/juliodelimas/banco-api), cobrindo os endpoints de autenticação e transferências bancárias. Projeto desenvolvido a partir do material de mentoria do Júlio de Lima.

## Executar testes

### POST /login

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

Ou definindo a URL base via variável de ambiente:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

### POST /transferencias

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencias.test.js
```

Ou definindo a URL base via variável de ambiente:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencias.test.js -e BASE_URL=http://localhost:3000
```

O relatório será gerado no arquivo `html-report.html` ao final da execução.
