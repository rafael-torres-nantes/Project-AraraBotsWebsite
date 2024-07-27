# 🌐 Ararabots Website

Bem-vindo ao repositório do __Ararabots Website__, um site estático dedicado à equipe de competição Ararabots. Este projeto visa fornecer uma página da web informativa e bem projetada sobre a equipe, utilizando várias tecnologias web para uma experiência de usuário eficiente e moderna.

## 📌 Navegação

- [📝 Sobre o Repositório](#sobre-o-repositório)
- [📂 Estrutura do Repositório](#estrutura-do-repositório)
- [🚀 Instalação e Execução](#instalação-e-execução)

## Sobre o Repositório

O __Ararabots Website__ é um projeto de site estático que exibe informações sobre a equipe de competição Ararabots. O site foi desenvolvido utilizando um conjunto de tecnologias modernas para garantir uma experiência de usuário atraente e responsiva.

### Tecnologias Utilizadas

- **Express**: Framework para construção de aplicações web com Node.js.
- **Express-Handlebars**: Motor de templates para renderização dinâmica de páginas.
- **Body-Parser**: Middleware para manipulação de dados enviados pelo usuário.
- **Sequelize**: ORM para interagir com bancos de dados SQLite.
- **SQLite3**: Banco de dados leve e integrado.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Bootstrap Icons**: Conjunto de ícones para melhorar a interface do usuário.
- **Nodemon**: Ferramenta para reinicialização automática do servidor durante o desenvolvimento.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- **src/public**: Contém arquivos estáticos como CSS, JavaScript e imagens.
- **src/views**: Contém os templates de visualização renderizados pelo Express-Handlebars.
- **package-lock.json**: Arquivo gerado automaticamente que contém informações sobre as dependências instaladas.
- **package.json**: Arquivo de configuração do projeto que lista as dependências e scripts de execução.
- **README.md**: Documento de introdução e instruções do projeto.

## Instalação e Execução

Para instalar as dependências e executar o projeto, siga os passos abaixo:

1. **Instalar Dependências**

   Execute o comando para instalar as dependências do projeto:

   ```bash
   npm install express express-handlebars body-parser sequelize sqlite3 dotenv bootstrap-icons
   npm i bootstrap-icons
   ```

2. **Instalar Nodemon para Desenvolvimento**

   Instale o Nodemon como uma dependência de desenvolvimento:

   ```bash
   npm install -D nodemon
   ```

3. **Executar o Projeto**

   Utilize o comando abaixo para iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O site estará disponível em `http://localhost:3000` (ou a porta especificada em seu arquivo de configuração).

Aproveite o site e sinta-se à vontade para contribuir com melhorias ou relatar problemas!
