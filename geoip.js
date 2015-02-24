(function( $ ) {
	$.fn.geoip = function(options) {
		
		// the plugin options
		var settings = $.extend({
			// These are the defaults.
			chUrl: "app.ch",
			deUrl: "app.de"
		}, options );
	
		// get the subdomain from link
		var subdomain = window.location.hostname.split('.').length >= 3 ? window.location.hostname.split('.')[0]:false;
		
		// escape if no subdomain is set
		if(subdomain) {
			var subdomainName = subdomain+'.';
		}else{
			var subdomainName = '';
		}
		
		// prevents the double "/" in url if no path
		if(window.location.pathname == '/'){
			var path = '';
		}else {
			var path = window.location.pathname;
		}
		
		// validates the ip based on the countrycode
		var request = new XMLHttpRequest();
		request.open('GET', "http://ip-api.com/json", true);
		
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.responseText);
				if(data['countryCode'] == "CH"){
					console.log("Weiter zu CH");
					alert('http://'+subdomainName+settings.chUrl+path+window.location.search);
					window.location = 'http://'+subdomainName+settings.chUrl+path+window.location.search;
	
				}
				if(data['countryCode'] == "DE"){
		
					console.log("Weiter zu DE");
					window.location = 'http://'+subdomainName+settings.deUrl+path+window.location.search;
		
				}
			} else {
				alert('ZOMG ERROR :(');
			}
		};
		// !IMPORTANT! this is required to run the json
		request.send();
	};
}( jQuery ));

$( document ).ready(function() {
	$("body").geoip();
});