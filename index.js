// Code your solutions in this file
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      // for (initialization; condition; iteration)
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      // (conditional) {[loop body]}
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }