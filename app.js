const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const embeddings = require('./embeddings');
const cosine_similarity = require('./cosine_similarity');
const word_analogies = require('./word_analogies');
const visualization = require('./visualization');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html')
});

app.post('/extraction', function(req, res){
    let glove_embeddings = embeddings()
    let word = req.body.word1;
    extracted_vect = glove_embeddings[word]
    res.send({name: extracted_vect});
})

app.post('/similarity', function(req, res){
    let glove_embeddings = embeddings()
    let word1 = req.body.word1;
    let word2 = req.body.word2;
    let extracted_vect1 = glove_embeddings[word1];
    let extracted_vect2 = glove_embeddings[word2];
    let similarity = cosine_similarity(extracted_vect1, extracted_vect2);
    res.send({name: similarity});
})

app.post('/word_analogy', function(req, res){
    let word1 = req.body.word1;
    let word2 = req.body.word2;
    let word3 = req.body.word3;
    let word_analogy = word_analogies(word1, word2, word3);
    res.send({name: word_analogy});
})

app.post('/visualization', function(req, res){
    let word1 = req.body.word1;
    let vis = visualization(word1);
    res.send({dr_data: vis.data, words: vis.words});
})

app.listen(port, function() {
    console.log(`App listening on port ${port}!`);
})