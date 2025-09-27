const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routers');
//HTTP logged
// app.use(morgan('combined'))
// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
            app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route initialize
router(app);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
