const path = require('path');
const express = require('express');
const morgan = require('morgan')
const app = express();
const exphbs  = require('express-handlebars');

const port = 3000
const route = require('./routes');
// http logger
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));
// template engine
app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
/* console.log("PATH: ", path.join(__dirname, 'resources/views')); */

//routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})