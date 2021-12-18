const glove_embeddings = require('./embeddings')

function matrix(words){
    word_embeddings = glove_embeddings();
    word_matrix = [];
    for (let i = 0; i < words.length; i++) {
        vect = word_embeddings[words[i]];
        word_matrix.push(vect);
    }
    return word_matrix;
}


function visualization(){
    x = ['cat', 'dog']
    ans = matrix(x)
    console.log(ans)
}

const d3 = require('d3');
const druid = require('@saehrimnir/druidjs/dist/druid.min.js')

const dataset = require('ml-dataset-iris').getNumbers();
let matrix = druid.Matrix.from(dataset);
Y = new druid.PCA(matrix).transform()
dr_data = []
arr = Y._data
cnt = 1
for (let i = 0; i < arr.length; i++) {
    if(cnt%2==0){
        let dp = [arr[i-1], arr[i]];
        dr_data.push(dp); 
    }
    cnt+=1
}

console.log(dr_data.length);
