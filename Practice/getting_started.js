const winkNLP = require( 'wink-nlp' )
const its = require( 'wink-nlp/src/its.js' )
const as = require( 'wink-nlp/src/as.js' )
const model = require( 'wink-eng-lite-model' )
const nlp = winkNLP( model )

const text = 'cats are cool'
const doc = nlp.readDoc( text )

console.log( doc.out() );
console.log( doc.tokens().out( its.type, as.freqTable ) );
console.log( doc.sentences().out() );
console.log( doc.entities().out( its.type ) );
console.log( doc.tokens().out() );
