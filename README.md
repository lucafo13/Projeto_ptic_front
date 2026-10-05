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

Mesmo assim, o programa ultiliza os dois em conjunto, criando uma aplicação desktop e ao mesmo tempo um site web, potencializando a programação e fazeno duas coisas ao mesmo tempo.

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
