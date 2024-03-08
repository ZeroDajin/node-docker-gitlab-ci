var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var infoRouter = require('./routes/info');
var defaultRouter = require('./routes/default');
var asyncawaitRouter = require('./routes/asyncawaitRouter'); // Corrected reference

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers in the correct order
app.use('/info', infoRouter);
app.use('/async-await', asyncawaitRouter); // Placed before the wildcard route
app.use('*', defaultRouter); // Wildcard route should be at the end

app.listen(6869, () => {
    console.log('Server is running on port 6869');
});

module.exports = app;
