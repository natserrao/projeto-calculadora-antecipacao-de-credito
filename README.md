# ➕ Calculadora de Antecipação de Recebíveis ➕

Hoje em dia é muito comum antecipar uma transação. Por isso, a calculadora foi desenvolvida para saber quais valores os clientes receberão caso optem por antecipar uma transação.

### `Simulando uma antecipação`

Para a simulação, é preciso enviar alguns dados:

```
{
    "amount": 15000,
    "installments": 3,
    "mdr": 4
}
```
ou os dados poderão ser enviados nesse formato:
```
{
    "amount": 15000,
    "installments": 3,
    "mdr": 4,
    "days": [30,60,90]
}
```
O amount (number) é o valor da transação em centavos. O installments (number) é o número de parcelas. O mdr (number) é a taxa cobrada pelas adquirentes sobre cada transação de cartão de crédito e débito. Days é um dado opcional (Array) que pode ser configurável, retornando os valores com os dias especificados.

Há 3 simulações de cenário na aplicação: timeout, delay e internal server error. Para testar os cenários, basta preencher os dados, apertar no botão do cenário escolhido e e selecionar o botão de calcular a transação. 

### `yarn start`
Para rodar a aplicação no modo de desenvolvimento:
Abrir no endereço [http://localhost:3000](http://localhost:3000) para visualização.

### `Deploy`
Para rodar a aplicação com deploy:
https://calculadora-antecipacao-credito-d19732dm4-natserrao.vercel.app/







