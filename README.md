# Projeto de PTIC

Sistema de gerenciamento e monitoramento de estoque, desenvolvido com tecnologias web e desktop.

---

## Stack

![Next.js](https://skillicons.dev/icons?i=nextjs)
![React](https://skillicons.dev/icons?i=react)
![TypeScript](https://skillicons.dev/icons?i=ts)
![Tailwind CSS](https://skillicons.dev/icons?i=tailwind)
![Axios](https://skillicons.dev/icons?i=axios)
![Chart.js](https://skillicons.dev/icons?i=chartjs)
![Tauri](https://skillicons.dev/icons?i=tauri)
![C#](https://skillicons.dev/icons?i=cs)
![MySQL](https://skillicons.dev/icons?i=mysql)

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Chart.js
- Tauri
- C# / ASP.NET Core
- Entity Framework Core
- MySQL

---

# Como funciona?

O projeto utiliza uma combinação de tecnologias para oferecer uma aplicação que funciona tanto em ambiente web quanto desktop.

O frontend é desenvolvido com Next.js, React e TypeScript, enquanto o Tauri permite utilizar a mesma aplicação como um programa desktop. Dessa maneira, é possível aproveitar uma única base de interface para disponibilizar o sistema em diferentes ambientes.

Embora Next.js e Tauri tenham finalidades distintas, sua integração permite combinar os recursos de uma aplicação web com as vantagens de um programa desktop.

## Arquitetura

A comunicação entre as principais tecnologias acontece da seguinte maneira:

```text
Next.js + React
      |
      | Axios
      v
 ASP.NET Core
      |
      | Entity Framework Core
      v
     MySQL
```

A versão desktop utiliza o Tauri como camada responsável por executar a aplicação em ambiente nativo:

```text
    Next.js
       |
       v
     Tauri
       |
       v
    Desktop
       |
       v
  API ASP.NET Core
```

---

# Backend

O backend foi desenvolvido em C#, utilizando ASP.NET Core e MySQL para o gerenciamento e armazenamento dos dados.

O banco de dados possui uma tabela destinada ao armazenamento dos produtos e suas respectivas propriedades, como identificador, nome, preço e informações de estoque.

A comunicação e o gerenciamento das operações são realizados por meio dos controllers da aplicação, com auxílio do Entity Framework Core para interação com o banco de dados.

**Repositório:** [Backend do projeto](https://github.com/lucafo13/Projeto_ptic_back)

## Funcionalidades do backend

- Cadastro de produtos;
- Listagem de produtos;
- Busca de produtos;
- Remoção de produtos;
- Controle de estoque;
- Atualização de estoque;
- Classificação automática do status dos produtos;
- Consulta de produtos por status.

---

# Frontend

O frontend foi desenvolvido utilizando Next.js, React e TypeScript, com Tailwind CSS para a estilização e construção da interface.

A comunicação com o backend é realizada por meio de requisições HTTP utilizando Axios. Para a apresentação de informações estatísticas, são utilizados gráficos e indicadores construídos com Chart.js.

## Funcionalidades do frontend

- Dashboard;
- Gerenciamento de produtos;
- Tabela de produtos;
- Controle de estoque;
- Indicadores de estoque;
- Gráficos e visualização de dados;
- Comunicação com a API;
- Interface desktop através do Tauri.

---

# Screenshots

![Screenshot da aplicação](https://github.com/user-attachments/assets/f6aa683e-5903-4294-bd44-b408c4bf38c0)

---

# Como executar

## Frontend

Instale as dependências:

```bash
npm install
```

Execute a versão web:

```bash
npm run dev
```

Para iniciar a versão desktop:

```bash
npm run app
```

## Backend

O backend deve ser executado separadamente e precisa estar conectado a uma instância do MySQL devidamente configurada.

Mais informações e código-fonte:

[Repositório do backend](https://github.com/lucafo13/Projeto_ptic_back)

---

# Status do projeto

**Em desenvolvimento.**

---

*Ó o fortin fih*
