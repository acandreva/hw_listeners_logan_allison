//This event listener listens for a click on the "Top" button in the navigation. When the button is clicked an alert window pops up.
var navTopAlert = document.getElementById( "top");

navTopAlert.addEventListener( "click", function () {
    window.alert( "You're already at the top" );
    });

//This event listener listens for a click on the "Bottom" button in the navigation. When the button is clicked an alert window pops up.
var navBtmAlert = document.getElementById( "bottom");

navBtmAlert.addEventListener( "click", function () {
    window.alert( "I'm sorry. This site doesn't really have a bottom." );
    });

//This event listener listens for a click on the "Header" button in the navigation. When the button is clicked an alert window pops up.
var headerLog = document.getElementsByTagName( "header" );

headerLog[0].addEventListener( "click", function () {
    console.log( "You have clicked on the header")
    });

//This event listener listens for a click on the "Open New Window" span. When the button is clicked a new window opens.
var newWin = document.getElementById( "openwin");

newWin.addEventListener( "click", function () {
    window.open();
    });
