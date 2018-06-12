var express = require('express');
var app = express();
var fs = require('fs');
var CsvReadableStream = require('csv-reader');
var AutoDetectDecoderStream = require('autodetect-decoder-stream');

var inputStream = fs.createReadStream('installers.csv')
                  .pipe(new AutoDetectDecoderStream({ defaultEncoding: '1255'}));
app.get('/', function(req, res){
  inputStream
    .pipe(CsvReadableStream({parseNumbers: true, parseBooleans: true, trim: true}))
    .on('data', function(row){
      console.log(row + "\n");

      var test =  JSON.stringify(row);

      //res.set('Content-Type', 'application/json'); //header, to return json
      res.write(test); //for body
  }).on('end', function (data){
    console.log('No more rows!');
    res.write("No more rows!");
  });
});

app.listen(8888)
