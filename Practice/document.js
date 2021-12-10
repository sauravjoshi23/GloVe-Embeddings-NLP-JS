const winkNLP = require( 'wink-nlp' )
const its = require( 'wink-nlp/src/its.js' )
const as = require( 'wink-nlp/src/as.js' )
const model = require( 'wink-eng-lite-model' )
const nlp = winkNLP( model )

const text = `On July 20, 1969, a voice crackled from the 
              speakers. He said simply, "the Eagle has landed." They 
              spent nearly 21 hours on the lunar surface. 20% of the 
              world\'s population watched humans walk on Moon.`
const doc = nlp.readDoc( text )

console.log( doc.entities().out() );
console.log( doc.entities().out( its.type ) );
console.log( doc.entities().itemAt(1).out() );
console.log( doc.sentences().itemAt(0).entities().itemAt(0).tokens().out() );
