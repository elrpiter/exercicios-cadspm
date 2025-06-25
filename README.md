# CADSPM - Curso de Análise e Desenvolvimento de Sistemas da PMERJ

## **Disciplina:** Desenvolvimento Web Full-Stack

### **Exercício:** Trabalho Prático - Painel de Controle com API Simulada

---

### **Aluno(a):**

* **Nome:** Piter Elias Lourencini Rezende
* **Turma:** I/2025
* **Data:** 25/06/2025

---

### **1. Descrição do Exercício**

Este trabalho prático consiste na criação de um painel de controle de usuários (uma aplicação CRUD - Create, Read). O sistema interage com uma API REST simulada para visualizar e cadastrar novos usuários.

A aplicação front-end foi desenvolvida para consumir os dados, exibi-los em uma lista na tela e permitir a adição de novos usuários por meio de um formulário interativo. O projeto segue um design pré-definido, focando na experiência do usuário e na clareza da interface.

A API foi simulada utilizando a ferramenta **`json-server`**, que serve um arquivo `db.json` localmente, mimetizando o comportamento de um back-end real.

---

### **2. Tecnologias Utilizadas**

* **Front-End:**
    * HTML5
    * CSS3
    * JavaScript
* **Back-End (Simulado):**
    * `json-server`: para criar uma API REST falsa a partir de um arquivo JSON.
    * `Node.js / npm`: como pré-requisito para instalar e executar o `json-server`.
* **Comunicação:**
    * `fetch()` API para requisições `GET` (buscar usuários) e `POST` (adicionar usuário).
* **Conceitos Chave:**
    * Interação Cliente-Servidor.
    * Manipulação de Formulários e Eventos (`submit`).
    * Requisições Assíncronas (`async/await`).
    * Renderização dinâmica de listas no DOM.

---

### **3. Estrutura do Projeto**

O projeto é dividido entre os arquivos do front-end e o arquivo de dados para a API simulada.

```
/
|-- /frontend           # Pasta com os arquivos da aplicação
|   |-- index.html      # Estrutura principal do painel
|   |-- style.css       # Estilização do painel e formulário
|   |-- script.js       # Lógica de requisições e manipulação do DOM
|
|-- /api                # Pasta com a base de dados da API
|   |-- db.json         # Arquivo com os dados dos usuários
|
|-- README.md           # Este arquivo de documentação
```

---

### **4. Como Executar o Projeto**

Para executar este projeto, é necessário iniciar o **back-end (API)** e o **front-end** separadamente.

**Pré-requisitos:**
* [Node.js e npm](https://nodejs.org/) instalados.
* `json-server` instalado globalmente. Caso não tenha, instale com o comando:
  ```bash
  npm install -g json-server
  ```

**Passos:**

1.  **Iniciar o Back-End (API):**
    * Abra um terminal e navegue até a pasta `/api`.
    * Execute o seguinte comando para iniciar o `json-server` no modo "watch", que atualiza automaticamente o `db.json` com novos cadastros:
      ```bash
      json-server --watch db.json
      ```
    * A API estará disponível em `http://localhost:3000/usuarios`.

2.  **Iniciar o Front-End:**
    * Abra **outro terminal** (mantenha o primeiro executando a API).
    * Navegue até a pasta `/frontend`.
    * Abra o arquivo `index.html` no seu navegador (usando o "Live Server" do VS Code ou abrindo o arquivo diretamente).

3.  **Utilizar a Aplicação:**
    * A lista de usuários será carregada automaticamente.
    * Preencha o formulário e clique em "Adicionar" para cadastrar um novo usuário. A lista será atualizada dinamicamente.

---

### **5. Funcionalidades Implementadas**

* [x] **Visualização de Usuários (Read):** Ao carregar, a página busca e exibe todos os usuários cadastrados na API.
* [x] **Cadastro de Usuários (Create):** Um formulário permite inserir `nome` e `idade` de um novo usuário.
* [x] **Submissão Assíncrona:** O envio do formulário dispara uma requisição `POST` para a API sem recarregar a página.
* [x] **Atualização Dinâmica:** Após o cadastro bem-sucedido, a lista de usuários na tela é atualizada automaticamente para incluir o novo registro.
* [x] **Interface Estilizada:** O layout do painel segue o design proposto, com foco na usabilidade e organização visual.

---

### **6. Desafios e Aprendizados**

Este trabalho foi fundamental para solidificar o entendimento do modelo cliente-servidor. O principal desafio foi gerenciar o estado da aplicação, garantindo que a interface do usuário (front-end) estivesse sempre sincronizada com a base de dados (back-end simulado).

Os principais aprendizados foram:
* A configuração e uso do `json-server` como uma ferramenta ágil para prototipagem de back-end.
* A diferença e aplicação dos métodos HTTP `GET` e `POST` em um cenário prático.
* O processo de capturar dados de um formulário, formatá-los como JSON e enviá-los para um servidor.
* A importância de fornecer feedback visual ao usuário, como atualizar a lista em tempo real após uma ação bem-sucedida.
