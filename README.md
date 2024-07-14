# Classroom Allocation API

Esta API permite o gerenciamento de alocação de salas para professores e alunos. Foi desenvolvida utilizando AdonisJS e PostgreSQL.

## Funcionalidades

- Cadastro de professores e alunos
- Edição de dados de professores e alunos
- Exclusão de dados de professores e alunos
- Consulta de dados de professores e alunos
- Cadastro, edição, exclusão e consulta de salas de aula
- Alocação de alunos em salas
- Consulta de alunos alocados em uma sala específica
- Consulta de salas em que um aluno está alocado

## Modelagem do banco de dados
![nova_modelagem](https://github.com/user-attachments/assets/bf78d808-71c0-4854-ac5e-a192157b3276)

## Tecnologias Utilizadas

![AdonisJS](https://img.shields.io/badge/AdonisJS-5A45FF.svg?style=for-the-badge&logo=AdonisJS&logoColor=white)
![Node.JS](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![Lucid](https://img.shields.io/badge/Lucid-282C33.svg?style=for-the-badge&logo=Lucid&logoColor=white)


## Como Rodar o projeto

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/classroom-allocation-api.git
cd classroom-allocation-api
```

2. Instale as dependências:

```
npm i
```

## Local

3. Inicie o projeto:

```
npm run dev
```

## Produção

3. Execute o comando de build:

```
npm run build
```

4. Caminhe para o diretório "build" criado:

```
cd build/
```

5. No caso do processo de build, o próprio AdonisJS orienta instalar as dependências porém utilizando o método de "ci" e usando uma flag para instalação somente das dependências regulares:

```
npm ci--omit="dev"
```

6. Inicie o projeto:
```
npm start
```
