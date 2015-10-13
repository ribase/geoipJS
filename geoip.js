(function( $ ) {
	$.fn.geoip = function(options) {

		// the plugin options
		var settings = $.extend({
			// These are the defaults.
            countries: ['de', 'ch', 'it', 'fr'],
            domain: 'google',
            usePath: false
		}, options );

        var protocol = document.location.protocol;

        if(protocol == 'file:'){
            var protocol = 'http:';
        }

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
        var json = (function () {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': 'http://ip-api.com/json',
                'crossDomain': true,
                'dataType': "json",
                'success': function (data) {
                    json = data;
                }
            });
            return json;
        })();

        $.each(settings.countries, function( index, value ){
            if(json['countryCode'].toLowerCase() == value){
                var urlToRefer = protocol+'//'+subdomainName+settings.domain+'.'+value;
                if(settings.usePath){
                    window.location = urlToRefer+path+window.location.search;
                }else{
                    window.location = urlToRefer;
                }
            }
        });

	};
}( jQuery ));

