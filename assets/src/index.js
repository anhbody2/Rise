const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routers');
const db = require('./config/db');

// Connect to the database
db.connect();

//HTTP logged
// app.use(morgan('combined'))
// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));


//Template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    helpers: {
        //create a section then render a part of link css or js or kind of that, then injects only when call to it
        section: function (name, options) {
            if (!this._sections) this._sections = {};   
            this._sections[name] = options.fn(this);    
            return null;                                
        }

    },
    cache: false

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route initialize
router(app);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});                                                             