const express = require('express'); // sem ./ quando se trata de um pacote
const cors = require('cors');       // módulo instalado via npm, para segurança, limitar quem poderá acessar.
const routes = require('./routes'); // utilizar './' referencia a mesma pasta, '../' - pasta seguinte, quando se trata de um arquivo

const app = express();

// MÓDULO CORS
// -----------------------------------------
// Quando vou publicar em um site tenho que definir por qual URL meu app vai ser acessado
// app.use(cors({ origin: 'http://meuapp.com' }));

// Como estamos em desenvolvimento, deixamos o método sem nenhum atributo. Permitindo que todas as 
// aplicações front-end possam acessar meu app.
app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3333);