# Banco de Trocas de Conhecimento

## 📌 Sobre o Projeto

O Banco de Trocas de Conhecimento é uma aplicação backend desenvolvida para permitir que pessoas cadastrem habilidades que desejam ensinar ou aprender, promovendo a troca de conhecimento de forma organizada e acessível.

Este projeto foi desenvolvido como parte do curso de Desenvolvimento Full Stack.

---

## 🎯 Objetivo

Criar uma API RESTful para:

- Cadastro de pessoas
- Cadastro de conhecimentos
- Associação entre pessoas e conhecimentos
- Organização estruturada das informações no banco de dados

A aplicação permite gerenciar dados de forma estruturada, seguindo boas práticas de arquitetura backend.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Nodemon
- Git & GitHub

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── modules/
│   ├── pessoas/
│   ├── conhecimentos/
│
├── config/
│
├── app.js
└── server.js
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
No terminal, clone o projeto:

```
git clone https://github.com/N1nh4/trocas-de-conhecimento.git
```
### 2️⃣ Acessar a pasta do projeto
```
cd trocas-de-conhecimento
```
### 3️⃣ Instalar as dependências
```
npm install
```
### 4️⃣ Configurar variáveis de ambiente
Crie um arquivo `.env` com base no `.env.example`:
```
DATABASE_URL="sua_string_de_conexao"
```
### 5️⃣ Rodar as migrations do Prisma
```
npx prisma migrate dev
```
### 6️⃣ Iniciar o servidor
```
npm run dev
```


:heavy_check_mark: O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🔎 Health Check

Para verificar se a API está funcionando:
```
GET /health
```
---

## 👩‍💻 Desenvolvido por

Alana Carolina Pereira Abreu  
Alessandra Kaline Cerqueira dos Santos  
Lucas Silva de Deus  
Pedro Henrique Lorenzom Gutierrez  
Rhobertta Grasielle Freitas Cardoso











