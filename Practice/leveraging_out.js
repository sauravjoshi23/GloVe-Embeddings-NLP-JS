const winkNLP = require( 'wink-nlp' )
const its = require( 'wink-nlp/src/its.js' )
const as = require( 'wink-nlp/src/as.js' )
const model = require( 'wink-eng-lite-model' )
const nlp = winkNLP( model )

const text = `Its quarterly profits jumped 76% to $1.13
              billion for the three months to December, 
              from $639million of previous year.`;
const doc = nlp.readDoc( text )

// console.log( doc.sentences().itemAt(0).out() );
// console.log( doc.sentences().itemAt(0).out( its.sentiment ) );
// console.log( doc.tokens().filter(
//     (t) => !t.parentEntity() && t.out( its.pos ) === 'NOUN'
// ).out() );

const processedTokens = [];
const detectedEntities = new Set();
doc.tokens()
    .each( (t) => {
        const pe = t.parentEntity();
        if (pe && !detectedEntities.has(pe.index())){
            // console.log( '$ '+t.out() );
            detectedEntities.add(pe.index());
            processedTokens.push('#'+pe.out(its.type));
        } else if (!pe && !t.out(its.stopWordFlag) 
                && (t.out(its.type) === 'word')){
            // console.log( t.out() );
            processedTokens.push(t.out(its.normal))
        }
    })
// console.log( processedTokens )

const poem = `Rain, rain, go away
Come again another day!`;
const doc2 = nlp.readDoc( poem );

console.log( doc2.tokens().filter( (t) =>
    !t.out(its.stopWordFlag) && (t.out(its.type) === 'word'))
    .out(its.normal, as.bow) );
