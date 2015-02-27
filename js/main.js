var submitButton = document.getElementById( "submit" );


submitButton.addEventListener( "click", function () {

        console.log( "The firstName is " + document.forms["myform"].elements["fname"].value );
        console.log( "The lastName is " + document.forms["myform"].elements["lname"].value );
        console.log( "The email is " + document.forms["myform"].elements["email"].value );
        console.log( "The message is " + document.forms["myform"].elements["message"].value );
    }

);