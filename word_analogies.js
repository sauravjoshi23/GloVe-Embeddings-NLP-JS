const glove_embeddings = require('./embeddings')
const cosine_similarity = require('./cosine_similarity')

function word_analogies(a,b,c){
    word_embeddings = glove_embeddings()
    a_vector = word_embeddings[a.toLowerCase()]
    b_vector = word_embeddings[b.toLowerCase()]
    c_vector = word_embeddings[c.toLowerCase()]
    words = Object.keys(word_embeddings)

    max_similarity = -1;
    match = ""

    for (let i = 0; i < words.length; i++) {
        x = []
        y = []
        for(var j=0; j<a_vector.length;j++){
            var num = b_vector[j]-a_vector[j];
            x.push(num);
        }

        let res = word_embeddings[words[i]]
        for(var j=0; j<c_vector.length;j++){
            var num = res[j]-c_vector[j];
            y.push(num);
        }

        cos_sim = cosine_similarity(x, y);

        if(cos_sim>max_similarity){
            max_similarity = cos_sim;
            match = words[i];
        }
    }

    return match;
}

module.exports = word_analogies;