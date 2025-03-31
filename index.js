//This is the main part which changes the quotes.

$(document).ready(function(){
    getQuote();
    var colors=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var randomQuote, randomNum, randomAuthor;
    function getQuote(){
        var quotes=['Hello','Hii','How r u'];
        var author=['1','2','3'];
        randomNum=Math.floor(Math.random()*quotes.length);
        randomQuote=quotes[randomNum];
        randomAuthor=quotes[randomNum];
        $('.quote').text(randomQuote);
        $('.author').text(randomAuthor);

    }
    $('#newQuote').on("click", function() {    
        getQuote();
    });
})
