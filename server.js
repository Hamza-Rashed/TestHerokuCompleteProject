const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    trainee = require('./api/trainee'),
    port = process.env.PORT || 3000
;
app.use(express.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/images',express.static(__dirname + '/api/images/'));
app.use('/api/profile',express.static(__dirname + '/api/profile/'));
app.use(express.static(__dirname + '/Front-End'))
app.use(express.static(__dirname + '/images'))
app.use(trainee)

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/Front-End/home/index.html')
})
app.get('/signup' , (req , res)=>{
    res.sendFile(__dirname + '/Front-End/signup/Sign up.html')
})
app.get('/profile' , (req , res)=>{
    res.sendFile(__dirname + '/Front-End/profile/profile.html')
})
app.get('/myphoto' , (req , res)=>{
    res.sendFile(__dirname + '/Front-End/my photo/myphoto.html')
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});