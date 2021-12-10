const winkNLP = require( 'wink-nlp' )
const its = require( 'wink-nlp/src/its.js' )
const as = require( 'wink-nlp/src/as.js' )
const model = require( 'wink-eng-lite-model' )
const nlp = winkNLP( model )

const text = `Its quarterly profits jumped 76% to $1.13
              billion for the three months to December, 
              from $639million of previous year.`;
const doc = nlp.readDoc( text )

doc.entities().each( (e) => {
    e.markup();
})
console.log( doc.out(its.markedUpText) );