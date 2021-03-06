const express = require('express');
const config = require('./config');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
    resp.render('index', {
        answer: 'This works'
    });
});

app.listen(config.port, config.port, () => {
    console.info(`Running on ${config.port}`);
});

