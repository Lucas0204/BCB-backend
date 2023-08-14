## Passos para rodar

- npm ci
- docker-compose up -d 
- npx prisma migrate dev
- npm start


## Instrucoes para teste

- Importar arquivo postman_collection no postman;
- Registrar cliente (rota **Register**);
- Adicionar id do cliente cadastrado com env no postman: **customer_id**;


## Premissas

- Dominios da aplicacao: clientes, mensagens (SMS), assinatura (plano)

- Clientes:
    podem enviar varias **mensagens**;
    podem ter apenas um tipo de **plano**;
    baseado em seu **plano**, possui debito e / ou credito para o envio das **mensagens**;

- Mensagens:
    podem ser enviadas a partir de um **cliente**;
    pode ser destinada a um numero nao cadastrado como **cliente**;
    exige que o **cliente** possua saldo ou limite disponivel em sua conta, de acordo com seu **plano**;

- Plano:
    deve ser escolhido pelo **cliente**;
    define a maneira em que o **cliente** sera cobrado pelos envios de mensagens;
