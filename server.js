const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    // ngo = require('./api/ngo'),
    trainee = require('./api/trainee'),
    port = 3000
    // trainers = require('./api/trainer'),
    // courses = require('./api/course')
;
app.use(express.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/images',express.static(__dirname + '/api/images/'));
app.use('/api/profile',express.static(__dirname + '/api/profile/'));

app.use(trainee)
// app.use(ngo);
// app.use(trainers);

// app.use('/imeges/ngos', express.static(__dirname + '/imeges/ngos'));

console.log (__dirname + '/api/profile/')
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

