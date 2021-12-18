function dot_product(vector1, vector2) {
    let result = 0;
    let length = vector1.length;
    for (let i = 0; i < length; i++) {
      result += vector1[i] * vector2[i];
    }
    return result;
}

function den_calculation(vector){
    let sum = 0;
    let length = vector.length;
    for (let i = 0; i < length; i++) {
      sum += vector[i] * vector[i];
    }
    let result = Math.sqrt(sum);
    return result;
}

function cosine_similarity(vector1, vector2){
    let num = dot_product(vector1, vector2);
    let den1 = den_calculation(vector1);
    let den2 = den_calculation(vector2);
    let den = den1*den2;
    let cos_sim = num/den;
    return cos_sim;
}


module.exports = cosine_similarity;