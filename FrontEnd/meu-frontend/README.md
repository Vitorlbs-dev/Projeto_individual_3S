# AutoCatalog

Sistema web para cadastro e visualização de automóveis, desenvolvido como projeto individual do 3º semestre de Análise e Desenvolvimento de Sistemas.

O projeto consiste em uma aplicação Full Stack, com Front-end desenvolvido em React e Back-end desenvolvido em Java com Spring Boot, integrado a um banco de dados H2.

---

## Objetivo

O objetivo do AutoCatalog é permitir o cadastro e a visualização de automóveis através de uma interface web.

A aplicação realiza a comunicação entre o Front-end e o Back-end por meio de uma API REST.

---

## Tecnologias utilizadas

### Front-end

- React
- JavaScript
- JSX
- CSS Modules
- Vite
- Fetch API

### Back-end

- Java
- Spring Boot
- Spring Web
- JdbcTemplate
- API REST

### Banco de dados

- H2 Database

### Ferramentas

- Visual Studio Code
- IntelliJ IDEA
- Git
- GitHub

---

##  Funcionalidades

O sistema possui as seguintes funcionalidades:

- Cadastro de automóveis;
- Visualização dos automóveis cadastrados;
- Integração entre Front-end e Back-end;
- Comunicação com API REST através dos métodos GET e POST;
- Validação dos dados antes do cadastro;
- Atualização automática da lista após um novo cadastro;
- Tratamento dos estados de carregamento, sucesso e erro.

---

##  Dados do automóvel

Cada automóvel possui os seguintes campos:

| Campo | Tipo |
|---|---|
| ID | Integer |
| Marca | String |
| Modelo | String |
| Ano | Integer |
| Cor | String |
| Preço | Double |
| Quilometragem | Integer |

---

##  API

A API possui os seguintes endpoints:

### Listar automóveis

```http
GET http://localhost:8080/automoveis
```

Retorna todos os automóveis cadastrados.

### Cadastrar automóvel

```http
POST http://localhost:8080/automoveis
```

Exemplo de requisição:

```json
{
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2024,
    "cor": "Preto",
    "preco": 125000,
    "quilometragem": 35000
}
```

### Validações

O Back-end verifica:

- Marca obrigatória;
- Modelo obrigatório;
- Ano válido;
- Cor obrigatória;
- Preço maior que zero;
- Quilometragem igual ou maior que zero.

Caso os dados sejam inválidos, a API retorna `400 Bad Request`.

Em caso de cadastro realizado com sucesso, a API retorna `201 Created`.

---

##  Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd projeto_individual_3S
```

---

### 2. Executar o Back-end

Abra a pasta `BackEnd` na IDE utilizada para desenvolvimento Java.

Execute a aplicação Spring Boot.

O Back-end será executado em:

```text
http://localhost:8080
```

---

### 3. Executar o Front-end

Abra um terminal dentro da pasta `FrontEnd`:

```bash
cd meu-frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Front-end será disponibilizado em:

```text
http://localhost:5173
```

---

## Banco de dados

O projeto utiliza o banco de dados H2.

Configuração utilizada:

```text
Banco: H2
URL: jdbc:h2:mem:automoveis
Usuário: sa
Senha:
```

A tabela utilizada pelo projeto é:

```sql
CREATE TABLE automovel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    cor VARCHAR(30) NOT NULL,
    preco DOUBLE NOT NULL,
    quilometragem INT NOT NULL
);
```

---

## Comunicação entre Front-end e Back-end

O Front-end realiza as requisições para a API utilizando a `Fetch API`.

O fluxo principal da aplicação funciona da seguinte forma:

```text
Usuário
   ↓
Formulário React
   ↓
POST /automoveis
   ↓
Spring Boot
   ↓
Validação
   ↓
Banco H2
   ↓
GET /automoveis
   ↓
Lista de automóveis no React
```

Após o cadastro de um automóvel, a lista é atualizada automaticamente através de uma nova requisição GET.

---

## Interface

A aplicação possui duas principais partes:

### Cadastro

Formulário para inserir:

- Marca;
- Modelo;
- Ano;
- Cor;
- Preço;
- Quilometragem.

### Lista

Exibição dos automóveis cadastrados em formato de cards.

---

##  Projeto acadêmico

Projeto desenvolvido para as disciplinas de desenvolvimento Front-end e programação Web do curso de:

**Análise e Desenvolvimento de Sistemas – SPTech**

**Tema:** Automóveis

**Semestre:** 3º semestre

---

##  Autor

**Vitor Lima**

Projeto acadêmico desenvolvido para fins educacionais.