# banco-api-performance

## Executar testes

### Com relatório HTML

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

O relatório será gerado no arquivo `html-report.html` ao final da execução.
