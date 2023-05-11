// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const path = require('path');
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT' + PORT));
});
