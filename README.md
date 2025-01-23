# Teste de consumo de API

> Descarregue o ficheiro do projeto, abra o ficheiro **devskiller-test.postman_collection.json** no Postman e **carregue-o quando tiver terminado**.


**Serviço para Gerar Pessoa**

**API URL**: `https://www.4devs.com.br/ferramentas_online.php`

**Método** `POST`

**Body** `form-data`

```
Key=acao        Value=gerar_pessoa
Key=pontuacao   Value=N
Key=sexo        Value=H
Key=txt_qtde    Value=1
```

Desejável realizar as seguintes Validações:

1. Validar o campo Status Code (Resultado esperado deve ser 200)
2. Validar se a Propriedade idade consta do ResponseBody
3. Validar se o valor do campo sexo do ResponseBody é igual a Masculino
4. Guarde o campo de resposta numero na variável de ambiente NUMERO
5. Escreva um teste para validar se o tempo de resposta da api esta aceitavel.
Tempo aceitavel 1s.