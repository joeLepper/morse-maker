var stdin = process.stdin
  , events = require('events')
  , morseCode = {
      a : '.-'
    , b : '-...'
    , c : '-.-.'
    , d : '-..'
    , e : '.'
    , f : '..-.'
    , g : '--.'
    , h : '....'
    , i : '..'
    , j : '.---'
    , k : '-.-'
    , l : '.-..'
    , m : '--'
    , n : '-.'
    , o : '---'
    , p : '.--.'
    , q : '--.-'
    , r : '.-.'
    , s : '...'
    , t : '_'
    , u : '..-'
    , v : '...-'
    , w : '.--'
    , x : '-..-'
    , y : '-.--'
    , z : '--..'
    , 0 : '-----'
    , 1 : '.----'
    , 2 : '..---'
    , 3 : '...--'
    , 4 : '....-'
    , 5 : '.....'
    , 6 : '_....'
    , 7 : '--...'
    , 8 : '---..'
    , 9 : '----.'
    }

stdin.setRawMode( true );
stdin.resume();
stdin.setEncoding( 'utf8' );

var telegraph = function( callback ){

  stdin.on( 'data', function( key ){
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
      process.exit();
    }  	 
    // write the key to callback all normal like	
    callback( morseCode[key] );
  });
}

exports.telegraph = telegraph;
