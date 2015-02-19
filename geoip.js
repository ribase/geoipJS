
var deUrl = "http://de.app.dev";
var chUrl = "http://ch.app.dev";

(function( $ ) {
	$.fn.geoip = function(options) {
		
	     var settings = $.extend({
            // These are the defaults.
            chUrl: chUrl,
            deUrl: deUrl
         }, options );
		
		
	    $.getJSON("http://ip-api.com/json", function(data) {

            if(data['countryCode'] == "CH"){

                console.log("Weiter zu CH");
                window.location = settings.chUrl+"/"+window.location.pathname;

            }else if(data['countryCode'] == "DE"){

                console.log("Weiter zu DE");
                window.location = settings.deUrl+"/"+window.location.pathname;

            }
	    });
	};
}( jQuery ));

$( document ).ready(function() {
	$("body").geoip();
});