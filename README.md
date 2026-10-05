# LOM: Library Of Management
## Aplicaçãozinha feita em nextJS para cuidar de grandes estoques

<div align="center">

![LOM](https://github.com/user-attachments/assets/792aa323-9d55-4d6c-8ee3-8e33264bac20)

</div>

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

# Como isso ta funcionando:

A LOM é feita apartir de uma stack meio duvidosa que contém NextJS e Tauri juntos, mesmo que ambos sejam frameworks opostos e com finalidades diferentes, sendo usar os dois juntos o mesmo que usar uma pá para escrever um livro.

<br>

Mesmo assim, o programa ultiliza os dois em conjunto, criando uma aplicação desktop e ao mesmo tempo um site web, potencializando a programação e fazeno duas coisas ao mesmo tempo

## Arquitetura

A estrutura ficou basicamente assim:

```text
Next.js + React
      │
      │ Axios
      ▼
ASP.NET Core
      │
      │ Entity Framework Core
      ▼
    MySQL
```

A versão desktop entra na brincadeira assim:

```text
Next.js
   │
   ▼
Tauri
   │
   ▼
Desktop
   │
   └──────► API ASP.NET Core
```

# Backend

A LOM é alimentada com um Backend feito em C#, usando ASP.NET e MySQL, nele, o banco de dados possui uma tabela produto contendo todas as propriedades (nome, id e tals), e é gerenciado pelo controller da aplicação, ProductController.cs. <br>

mais do Back aqui [Backend do app](https://www.github.com/lucafo13/ptic_back)

## O que o backend faz

* Cadastro de produtos
* Listagem de produtos
* Busca de produtos
* Remoção de produtos
* Controle de estoque
* Atualização de estoque
* Classificação de status dos produtos
* Consulta de produtos por status

# Frontend

O frontend é construído com Next.js, React e TypeScript, utilizando Tailwind CSS para a interface.

Algumas partes da aplicação:

* Dashboard
* Gerenciamento de produtos
* Tabela de produtos
* Controle de estoque
* Indicadores de estoque
* Gráficos
* Comunicação com a API
* Interface para desktop através do Tauri

# screenshots

<img width="1896" height="1047" alt="image" src="https://github.com/user-attachments/assets/f6aa683e-5903-4294-bd44-b408c4bf38c0" />

# Como rodar

## Frontend

```bash
npm install
npm run dev
```

Para abrir a versão desktop:

```bash
npm run app
```

## Backend

O backend precisa estar rodando separadamente e conectado ao banco MySQL.

Mais informações e código do backend:

[Backend do app](https://www.github.com/lucafo13/ptic_back)

# Status

Em desenvolvimento.

# Ó o fortin
