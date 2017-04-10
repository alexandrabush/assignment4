// gets predictive results that link to google

(function() {
 	
	//When the user types something, grab what's been typed and get the json
 	$('.flexsearch-input').keyup(function(e) {
    	var searchVal = $('.flexsearch-input').val();
    	searchVal = searchVal.toLowerCase();
    	$('.predictive-results').html("");
    	grabResults(searchVal);
    });

 	// loop through JSON data and add any matching things to the div
    function grabResults(searchVal) {

    	// empty google link that we can tack a search result on to
    	googleMeLink = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q="

    	// grab the json data using a get
    	$.getJSON("http://www.mattbowytz.com/simple_api.json?data=all", function( data ) {
		 	//loop through the json
		 	for (var i in data) {
  				for (var j in data[i]) {
  					var possibleResults = data[i][j];
  					for( var k in possibleResults){
  						// if the current piece of data matches the current search, add it to the div
  						var currItem = possibleResults[k];
  						currItem = currItem.toLowerCase();
  						if(currItem.startsWith(searchVal) && searchVal.length > 0 && currItem.length > 1) {
                			$('.predictive-results').append('<a target="_blank" href=' + googleMeLink + currItem.replace(' ', '%20') + '>' + currItem + '</a><br>');
		 				}
  					}
   				}
			}		
		});
	}
})();