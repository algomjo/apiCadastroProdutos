# Cadastro de Produtos

Aplicação **full stack** para gerenciamento de produtos, com backend em **ASP.NET Core Web API**, persistência em **SQL Server** via Entity Framework Core e frontend em **React** consumindo a API REST.

## Tecnologias

### Backend

- C# / .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Swagger / OpenAPI
- CORS

### Frontend

- React 18
- JavaScript
- Axios
- React Scripts

## Funcionalidades

- Cadastro de produtos.
- Listagem dos produtos cadastrados.
- Edição de produtos existentes.
- Exclusão de produtos.
- API REST para operações CRUD.
- Persistência dos dados em SQL Server.
- Interface React integrada ao backend por HTTP.
- Documentação interativa da API com Swagger em ambiente de desenvolvimento.

## Estrutura do projeto

```text
CadastroProdutos/          Backend ASP.NET Core
├── Controllers/           Endpoints da API
├── Data/                  Contexto de acesso a dados
├── Models/                Entidades da aplicação
├── Migrations/            Estrutura do banco de dados
└── Program.cs             Configuração da aplicação

cadastro-produtos-front/   Frontend React
└── src/                   Componentes e serviços da interface
```

## Executando o backend

Pré-requisitos:

- .NET SDK 8
- SQL Server

Clone o repositório e acesse o projeto da API:

```bash
git clone https://github.com/algomjo/apiCadastroProdutos.git
cd apiCadastroProdutos/CadastroProdutos
```

Configure `ConnectionStrings:DefaultConnection` em `appsettings.json` para uma instância SQL Server disponível no seu ambiente.

Depois execute:

```bash
dotnet restore
dotnet run
```

Em ambiente de desenvolvimento, o Swagger é disponibilizado na raiz da aplicação.

## Executando o frontend

Em outro terminal:

```bash
cd apiCadastroProdutos/cadastro-produtos-front
npm install
npm start
```

Por padrão, o frontend do Create React App será iniciado em `http://localhost:3000`.

A URL utilizada para consumir a API pode ser ajustada no serviço do frontend conforme o endereço em que o backend estiver executando.

## Arquitetura

O frontend React é responsável pela interface e envia requisições HTTP para a API ASP.NET Core. O backend concentra as regras de acesso aos dados e utiliza Entity Framework Core com o provider do SQL Server para persistência.

```text
React
  │
  │ HTTP / JSON
  ▼
ASP.NET Core Web API
  │
  │ Entity Framework Core
  ▼
SQL Server
```

---

Desenvolvido por [Alexandre Gomes de Araújo](https://github.com/algomjo).