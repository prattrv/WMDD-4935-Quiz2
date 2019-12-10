const express = require('express');
const app = express();
const {getCharacters} = require('./data/characterData.js')
const {indexRouter} = require(__dirname + '/routes/index.js')

app.use(express.static('public'));

app.use('/api', indexRouter)

getCharacters()
.then(res => {
    app.locals.characters = res
    app.listen(8080, ()=>console.log('listening'))
    
})
.catch(err => {console.log(err)})

