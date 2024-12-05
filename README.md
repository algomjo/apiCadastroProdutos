# README - API de Cadastro de Produtos

Este repositório contém uma aplicação completa para gerenciamento de produtos, composta por uma API em **.NET** para o backend e uma interface desenvolvida em **React** para o frontend. Abaixo estão as instruções de instalação, configuração, execução e o diagrama do banco de dados.


## 📋 **Pré-requisitos**
- **Backend**
  - [.NET SDK 9.0](https://dotnet.microsoft.com/download/dotnet/9.0)
  - [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
  - [Visual Studio](https://visualstudio.microsoft.com/pt-br/) (ou outra IDE/editor compatível)

- **Frontend**
  - [Node.js](https://nodejs.org/) (versão LTS recomendada)
  - Gerenciador de pacotes `npm` (incluído no Node.js)


## ⚙️ **Configuração**

### **Backend**
1. Clone o repositório:
   ```bash
   git clone https://github.com/algomjo/apiCadastroProdutos.git
   ```
  
2. Configure o banco de dados no arquivo appsettings.json:

    Acesse o arquivo na pasta ./CadastroProdutos/appsettings.json e atualize a string de conexão para o seu ambiente MySQL:
    ```json
    "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=cadastro_produtos;User=seu_usuario;Password=sua_senha;"
    }
    ```
3. Execute as migrações para criar o banco de dados:
    ```bash
    dotnet ef database update
    ```

4. Execute a API:
    ```bash
    dotnet run
    ```

### **Frontend**
1. Acesse a pasta do frontend

2. Instale as Dependências:
    ```bash
    npm install
    ```

3. Configure a URL da API no frontend:
No arquivo src/services/produtoService.js, certifique-se de que o valor de API_URL aponta para o backend:
    ```javascript
    const API_URL = "http://localhost:5042/api/Produtos";
    ```

4. Execute o frontend:
    ```bash
    npm start
    ```

A interface estará disponível em http://localhost:3000.


## 🛠 **Funcionalidades**
- **Frontend**:
  - Cadastro de novos produtos. 
  - Exibição de uma lista de produtos.
  - Edição de produtos existentes.
  - Exclusão de produtos.

- **Backend**:
  - API RESTful com operações CRUD para gerenciamento de produtos.
  - Banco de dados MySQL para armazenamento persistente.

  ## 📊 Diagrama do Banco de Dados

    ```mermaid
    erDiagram
        Produto {
            int Id PK "Identificador único do produto"
            string Nome "Nome do produto"
            decimal Preco "Preço do produto"
            string Descricao "Descrição do produto"
        }

## 📂 **Estrutura do Repositório**
- `CadastroProdutos/`: Código-fonte da API .NET.
- `cadastro-produtos-front/`: Código-fonte do frontend em React.



**Autor:** [Alexandre Gomes de Araújo - algomjo](https://github.com/algomjo)  
**Repositório:** [https://github.com/algomjo/apiCadastroProdutos](https://github.com/algomjo/apiCadastroProdutos)
