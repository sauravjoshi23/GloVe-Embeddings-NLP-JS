const winkNLP = require( 'wink-nlp' )
const its = require( 'wink-nlp/src/its.js' )
const as = require( 'wink-nlp/src/as.js' )
const model = require( 'wink-eng-lite-model' )
const nlp = winkNLP( model )

const text = `The Godfather premiered on March 15, 1972.
              It was released on March 24, 1972. It is the 
              first installment in The Godfather trilogy. 
              The story of the movie spans from 1945 to 1955. 
              About 90 percent of the film was shot in New 
              York City. The movie was made on a budget of 
              $7.2 million. And it has a running time of 
              177 minutes.`;
const doc = nlp.readDoc( text )

const sentence3 = doc.sentences().itemAt(3);
const entity2 = doc.entities().itemAt(2);
const token1 = doc.tokens().itemAt(1);

console.log( doc.sentences().itemAt(3).tokens().filter(
    (t) => t.out( its.type ) === 'word' && !t.out( its.stopWordFlag )
).out() );

console.log( doc.entities()
            .each((e) => {
                if (e.out(its.type) === 'DATE')
                    console.log(e.out());
            }) );