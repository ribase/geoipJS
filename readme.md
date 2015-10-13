GEOIP.JS
==============


What is this?
--------------

GeoIP.js is a simple referrer which gets ip informations via "http://ip-api.com/" to refer the url request to the right domain/country


Installation
--------------

- Include jQuery 
- Include Plugin

```
<script src="geoip.js"></script>
```


- Plugin usage
```javascript
	$("body").geoip({
		countries: ['de', 'ch', 'it', 'fr'],
        usePath: false
	});
``` 	
Configuration
--------------

You can have several options available:

In "countries" u can define at least 2 countries to check
``` countries: ['de', 'ch', 'it', 'fr'] ```

The option "usePath" is used to add the path to the new refer
``` usePath: false ```

Domain is used to define a domain
``` domain: 'google' ```

