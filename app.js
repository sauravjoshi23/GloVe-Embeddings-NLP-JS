const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
const embeddings = require('./embeddings');
const cosine_similarity = require('./cosine_similarity');
const word_analogies = require('./word_analogies');
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html')
});

app.post('/', (req, res) => {
    if(typeof(req.body.f1) != 'undefined'){
        let glove_embeddings = embeddings()
        let word = req.body.f1;
        extracted_vect = glove_embeddings[word]
        console.log(extracted_vect);
    }
    if(typeof(req.body.sim1) != 'undefined'){
        let glove_embeddings = embeddings()
        let word1 = req.body.sim1;
        let word2 = req.body.sim2;
        let extracted_vect1 = glove_embeddings[word1];
        let extracted_vect2 = glove_embeddings[word2];
        let similarity = cosine_similarity(extracted_vect1, extracted_vect2);
        console.log(similarity);
    }
    if(typeof(req.body.wa1) != 'undefined'){
        let word1 = req.body.wa1;
        let word2 = req.body.wa2;
        let word3 = req.body.wa3;
        let word_analogy = word_analogies(word1, word2, word3);
        console.log(word_analogy);
    }
    
    res.send("POST Request Called")
})

app.listen(port, function() {
    console.log(`App listening on port ${port}!`);
})