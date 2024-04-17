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

