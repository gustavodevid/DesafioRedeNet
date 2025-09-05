# Pokédex Challenge

Uma aplicação web cliente-servidor para gerenciar e controlar uma Pokédex pessoal. O projeto permite que usuários se cadastrem, façam login e adicionem ou removam Pokémons de sua coleção. A aplicação consome a [PokéAPI](https://pokeapi.co/) para listar os Pokémons disponíveis.

---

### **Funcionalidades**

- **Cadastro de Usuário:** Criação de uma nova conta com nome, e-mail e senha.
- **Autenticação de Usuário:** Login seguro via JWT (JSON Web Tokens).
- **Listagem de Pokémons:** Exibe a lista completa de Pokémons (os primeiros 151) obtida da PokéAPI.
- **Gerenciamento de Pokédex:** Permite ao usuário logado adicionar e remover Pokémons de sua coleção.
- **Visualização da Pokédex Pessoal:** Exibe apenas os Pokémons que o usuário possui.

---

### **Tecnologias Utilizadas**

#### **Backend (Servidor)**

- **Node.js:** Ambiente de execução JavaScript.
- **Express.js:** Framework web para construir a API REST.
- **TypeScript:** Linguagem para tipagem estática.
- **Prisma:** ORM para interagir com o banco de dados.
- **SQLite:** Banco de dados simples para desenvolvimento.
- **bcryptjs:** Para criptografar senhas.
- **jsonwebtoken:** Para gerar e verificar tokens de autenticação.
- **axios:** Cliente HTTP para consumir a PokéAPI.

#### **Frontend (Cliente)**

- **React:** Biblioteca JavaScript para a interface de usuário.
- **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido.
- **TypeScript:** Linguagem para tipagem estática.
- **React Router DOM:** Para gerenciar o roteamento da aplicação.
- **Axios:** Cliente HTTP para consumir o backend.

---

### **Pré-requisitos**

Antes de começar, você deve ter o **Node.js** e o **npm** (ou yarn) instalados em sua máquina.

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)

---

### **Instalação**

Siga os passos abaixo para instalar e configurar o projeto:

1.  Clone este repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  Entre na pasta do projeto e instale as dependências do **backend**:
    ```bash
    cd pokedex-backend
    npm install
    ```

3.  Configure o banco de dados e gere o cliente do Prisma. Isso criará o arquivo `dev.db` e o código necessário para a comunicação:
    ```bash
    npx prisma migrate dev --name init_database
    npx prisma generate
    ```

4.  Volte para a pasta principal e instale as dependências do **frontend**:
    ```bash
    cd ../pokedex-frontend
    npm install
    ```

---

### **Como Rodar a Aplicação**

Você precisará rodar o backend e o frontend em terminais separados.

1.  No primeiro terminal, inicie o servidor do **backend**:
    ```bash
    cd pokedex-backend
    npm run dev
    ```

2.  No segundo terminal, inicie a aplicação **frontend**:
    ```bash
    cd pokedex-frontend
    npm run dev
    ```

O frontend estará acessível em `http://localhost:5173` (ou a porta que o Vite indicar) e o backend em `http://localhost:3000`.

---

### **Endpoints da API**

A API oferece os seguintes endpoints para gerenciamento.

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Registra um novo usuário. |
| `POST` | `/api/auth/login` | Autentica o usuário e retorna um JWT. |
| `GET` | `/api/auth/me` | Retorna os dados do usuário logado (requer JWT). |
| `GET` | `/api/pokemon/all` | Lista todos os Pokémons da PokéAPI. |
| `GET` | `/api/pokemon/my-pokedex`| Lista os Pokémons do usuário logado (requer JWT). |
| `POST` | `/api/pokemon/add` | Adiciona um Pokémon à Pokédex do usuário (requer JWT). |
| `DELETE`| `/api/pokemon/remove` | Remove um Pokémon da Pokédex do usuário (requer JWT). |

---

### **Autor**

- [Gustavo David]
- <a href="https://https://github.com/gustavodevid"><b>GitHub</b></a><br/>
- <a href="https://www.linkedin.com/in/devbardavid/"><b>Linkedin</b></a><br/>