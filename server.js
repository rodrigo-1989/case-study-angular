const express = require('express')
const path = require('path');

const app = express();

app.use(express.static('./dist/case-study'));
app.get('/', (req,res) =>mres.sendFile('index.html',{root:'dist/angular-app-heroku' }) );

app.listen(precess.env.PORT || 8080);