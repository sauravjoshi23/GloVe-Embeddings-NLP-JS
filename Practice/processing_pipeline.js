const winkNLP = require( 'wink-nlp' )
const its = require( 'wink-nlp/src/its.js' )
const as = require( 'wink-nlp/src/as.js' )
const model = require( 'wink-eng-lite-model' )
const nlp = winkNLP( model )

const text = 'cats are cool'
const doc = nlp.readDoc( text )

console.log( doc.tokens().out() );
console.log( doc.tokens().out( its.stopWordFlag ) );
console.log( doc.tokens().out( its.pos ) );
console.log( doc.tokens().out( its.lemma ) );