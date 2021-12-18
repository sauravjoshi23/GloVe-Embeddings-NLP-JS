const fs = require('fs')

function load_embeddings(){
    var data = fs.readFileSync('./Glove_pre-trained_vectors/glove.6B.100d.txt')
    data = data.toString()
    data = data.split("\n")

    glove_embeddings = {}
    for(var i=0; i<data.length;i++){
        values = data[i]
        //tokenize -> separate word and vector
        tokens = values.split(' ')
        word = tokens.slice(0,1)[0];
        vect = tokens.slice(1,);
        // coverting string to int
        int_vect = []
        for(var j=0; j<vect.length;j++){
            var num = Number(vect[j]);
            int_vect.push(num);
        }
        glove_embeddings[word] = int_vect;
    }
    return glove_embeddings
}

module.exports = load_embeddings;


