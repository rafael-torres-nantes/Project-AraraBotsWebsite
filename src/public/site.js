// Carregando variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importação de módulos necessários
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');  // Importando o handlebars para controle de layout das páginas

// Inicialização do aplicativo Express
const app = express();

// Configuração da porta do servidor a partir das variáveis de ambiente ou padrão 3000
const PORT = process.env.PORT || 3000;

// // Configurar o Handlebars
// app.set('views', './views');
// app.engine('handlebars', exphbs.engine({ defaultLayout: 'layout' }));
// app.set('view engine', '.handlebars');

// Configuração do Handlebars como mecanismo de template para renderização de views
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars' }, { defaultLayout: 'Main' }));
app.set('view engine', '.handlebars');
app.set('views', './src/views');

// Middleware para parsing de JSON e dados de formulário URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos localizados na pasta /src/public
app.use(express.static('./src/public'));

// Rota alternativa para a página inicial - redundante, pode ser removida para evitar confusão
app.get('/', (req, res) => {
    res.render('home');
});

// Inicialização do servidor na porta configurada, com um log para confirmação
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});