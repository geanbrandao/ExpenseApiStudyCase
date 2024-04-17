# ExpenseApiStudyCase

Um estudo de caso para o desenvolvimento de uma api usando NodeJs com typescript para controle de despesas

# Passos

### Iniciar o projeto node

`npm init -y`

### Instalar o typescript como dependencia de desenvolvimento

`npm i typescript -D`

### Criar arquivo de config do typescript

`npx tsc --init`

### Trocar ecmascript para ES2020 no arquivo tsconfig.json

`"target": "ES2020",`

### Criar arquivo .env e .env.example

- .env vai conter as variaveis de ambiente e não deve subir no git
- .env.example vai mostrar o formato e variáveis de ambiente que são esperadas pelo projeto. Serve como exemplo para outros devs. Sobe para o GIT

### Criar pasta source e arquivo server.ts

### Instalar framework fastify, responsável por ajudar a construir as rotas

`npm i fastify`

### Instalar o pacote de definições do node para typescript como uma depedência de desenvolvimento

`npm i @types/node -D`

### Instalar o TSX como dependência de desenvolvimento que permite automatizar o processo de converter o código para javascript e executar o node no JS

Isso também evita que fique gerando arquivos javascript dentro da pasta do projeto.

`npm i tsx -D`

### Criar um script no package json para automatizar a execução do tsx

`"dev": "tsx watch src/server.ts",` watch serve para manter a execução dinamica a cada mudança feita

### Para executar o projeto é só rodar no terminal o comando criado

`npm run dev`

## Banco de dados

### Configurar e instalar knex

`npm install knex sqlite3`

### Criar pasta db na raiz do projeto

- Local onde vai ficar o `.db` arquivo resposavel por manter os dados durante o desenvolvimento
- Aqui vai ficar a pasta `migrations`, que vai ser responsável pelo controle de versão do banco de dados. Será gerada automáticamente.

### Criar arquivo database.ts

- Esse arquivo vai conter a configuração da database.

## Criar migrations

### Criar comando para executar binario do knex que vai possibilitar a criação das migrations

O binário do knex não sabe a localização das configurações da database. Para que o knex conheça as configurações do banco de dados existe uma convenção, onde é criado um arquivo knexfile.ts onde essas configurações vão ser importadas.

### Agora precisamos criar um comando para executar o knex usando o tsx que conhece typescript

`"knex": "node --no-warnings --loader tsx ./node_modules/.bin/knex"`

### Criando a primeira migration
No terminal vamos executar:
````
npm run knex -- migrate:make create-categories
````
Onde `create-categories` é o nome da migration

Ao executar o comando acima a migration é criada na raiz do projeto. Para definir um local específico para as migrations vamos adicionar uma configuração no arquivo database 
`````
migrations: {
  extension: "ts",
  directory: "./db/migrations",
}
`````
Agora é só executar o comando novamente.