# ExpenseApiStudyCase
Um estudo de caso para o desenvolvimento de uma api usando NodeJs com typescript para controle de despesas

# Passos

### Iniciar o projeto node
``npm init -y``

### Instalar o typescript como dependencia de desenvolvimento
``npm i typescript -D`` 

### Criar arquivo de config do typescript
``npx tsc --init``

### Trocar ecmascript para ES2020 no arquivo tsconfig.json
``"target": "ES2020",``

### Criar arquivo .env e .env.example
- .env vai conter as variaveis de ambiente e não deve subir no git
- .env.example vai mostrar o formato e variáveis de ambiente que são esperadas pelo projeto. Serve como exemplo para outros devs. Sobe para o GIT

### Criar pasta source e arquivo server.ts
### Instalar framework fastify, responsável por ajudar a construir as rotas
``npm i fastify``

### Instalar o pacote de definições do node para typescript como uma depedência de desenvolvimento
``npm i @types/node -D``


### Instalar o TSX como dependência de desenvolvimento que permite automatizar o processo de converter o código para javascript e executar o node no JS
Isso também evita que fique gerando arquivos javascript dentro da pasta do projeto.

``npm i tsx -D``

### Criar um script no package json para automatizar a execução do tsx
``"dev": "tsx watch src/server.ts",`` watch serve para manter a execução dinamica a cada mudança feita

### Para executar o projeto é só rodar no terminal o comando criado
``npm run dev``

## Banco de dados
### Configurar e instalar knex
``npm install knex sqlite3``

### Criar pasta db na raiz do projeto 
- Local onde vai ficar o ``.db`` arquivo resposavel por manter os dados durante o desenvolvimento
- Aqui vamos criar também uma pasta chamada ``migrations``, que vão ser responsáveis pela integridade do banco de dados garantindo que todas as modificações feitas no banco sejam feitas na ordem correta

### Criar arquivo database.ts
- Esse arquivo vai conter a configuração da database