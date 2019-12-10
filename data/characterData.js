const fs = require('fs')
const csvParser = require('csv-parser')
const stripBomStream = require('strip-bom-stream')

exports.getCharacters = () => {
    
    let characters = []
    
    return new Promise((resolve, reject) => {
        fs.createReadStream('./data/characters.csv')
        .pipe(stripBomStream()) // takes the output of one stream and passes it into another.// In this case we're using it to pass the data from the read stream of bands.csv into the functions that strip the bom and convert the data from csv to a JS object
        .pipe(csvParser( {
            mapHeaders: ({ header, index }) => header.toLowerCase()
        })) 
        .on('data', row => {
            characters.push(row)
        })
        .on('end', () => {
            resolve(characters)
        })
        .on('error', (err) => {
            reject(err)
        })
    })
}