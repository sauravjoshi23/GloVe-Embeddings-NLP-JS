const glove_embeddings = require('./embeddings')
const druid = require('@saehrimnir/druidjs/dist/druid.min.js');
const { type } = require('express/lib/response');

function create_matrix(words){
    word_embeddings = glove_embeddings();
    word_matrix = [];
    new_words = [];
    for (let i = 0; i < words.length; i++) {
        vect = word_embeddings[words[i].toLowerCase()];
        if(typeof(vect) != 'undefined'){
            word_matrix.push(vect);
            new_words.push(words[i]);
        }
    }
    return [word_matrix, new_words];
}


function pca(dataset){
    let matrix = druid.Matrix.from(dataset);
    let Y = new druid.PCA(matrix).transform();
    dr_data = [];
    arr = Y._data;
    cnt = 1;
    for (let i = 0; i < arr.length; i++) {
        if(cnt%2==0){
            let dp = [arr[i-1], arr[i]];
            dr_data.push(dp); 
        }
        cnt+=1;
    }
    return dr_data;
}


function visualization(a){
    let words_split = a.split(' ');
    console.log(words_split);
    let res = create_matrix(words_split);
    let dataset = res[0];
    let new_words = res[1];

    let dr_data = pca(dataset);
    let words = new_words;

    vis_dict = {
        'data': dr_data,
        'words': words,
    }

    return vis_dict;
}

module.exports = visualization;