var express = require('express');
const PORT = 4000;
var indexRouter = require('./routes/index')

var app = express();
app.use(express.json());

app.use('/api', indexRouter);

app.listen(PORT, () => {
    console.log('server started');
});

module.exports = app;
