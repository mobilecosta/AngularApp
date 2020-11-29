const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Customiza retorno do metodo Get
router.render = (req, res) => {
  const data = res.locals.data;
  if (data && data instanceof Array) {
    res.jsonp({
        items: data,
        hasNext: false
      })
  } else {
    res.jsonp(data)
  }
}

server.db = router.db

// Use default router
server.use(auth)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 4200);