# banco-api-performance

## Introdução

Testes de performance para a [banco-api](https://github.com/juliodelimas/banco-api), cobrindo os endpoints de autenticação e transferências bancárias. Projeto desenvolvido a partir do material de mentoria do Júlio de Lima.

Repositório: https://github.com/MarceloSwap/banco-api-performance

## Tecnologias Utilizadas

- [k6](https://k6.io/) — ferramenta de testes de performance
- JavaScript — linguagem utilizada nos scripts de teste

## Estrutura do Repositório

```
banco-api-performance/
├── config/
│   └── config.local.json
├── fixtures/
│   ├── postLogin.json
│   └── postTransferencias.json
├── helpers/
│   └── autenticacao.js
├── tests/
│   ├── login.test.js
│   └── transferencias.test.js
└── utils/
    └── variaveis.js
```

### Objetivo de cada grupo de arquivos

- `config/` — configurações locais do projeto, como a URL base da API
- `fixtures/` — dados de entrada utilizados nas requisições (payloads)
- `helpers/` — funções auxiliares reutilizáveis, como obtenção de token de autenticação
- `tests/` — scripts de teste de performance organizados por endpoint
- `utils/` — utilitários gerais, como leitura de variáveis de ambiente e configurações

## Instalação

1. Instale o k6: https://grafana.com/docs/k6/latest/set-up/install-k6/
2. Clone o repositório:
```bash
git clone https://github.com/MarceloSwap/banco-api-performance.git
```
3. Acesse o diretório do projeto:
```bash
cd banco-api-performance
```

## Execução

A URL base da API é configurada via variável de ambiente `BASE_URL`. Caso não seja informada, o valor padrão definido em `config/config.local.json` será utilizado (`http://localhost:3000`).

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

> `K6_WEB_DASHBOARD=true` habilita o acompanhamento do relatório em tempo real via browser.
> `K6_WEB_DASHBOARD_EXPORT=html-report.html` exporta o relatório ao final da execução para o arquivo `html-report.html`.
