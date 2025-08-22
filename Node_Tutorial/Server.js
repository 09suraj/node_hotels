const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //Save on req.body

app.get('/', (req, res) => {
  res.send('Welcome to my Hotel... How i can help you ?')
})


// app.get('/idli', (req, res) => {
//   var customized_idli = {
//       Name : 'Rava Idli',
//       Size : '10 cm ',
//       ischatni : true
//     }
//     res.send(customized_idli)
// })


// app.post('/items', (req, res) => {
//   res.send('Data is Saved')
// })

//Import the router files
const personRoutes = require('./routes/personRoutes');

const menuRoutes = require('./routes/menuRoutes');


//use the routers
app.use('/person',personRoutes);

app.use('/menu',menuRoutes);


app.listen(3000, ()=> {
    console.log('Server listening on Port 3000')
})

