var x = 1;

var theHead = document.getElementsByTagName( "h1" );

theHead[0].addEventListener( "click", function() {

    var newGraf = document.createElement( "p" );

    newGraf.innerHTML = "This is click " + x;

    x++;

    var theWrapper = document.getElementsByTagName( "body" )[0];

    theWrapper.appendChild( newGraf );

    }
);