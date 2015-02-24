GEOIP.JS
==============


Was/Wieso/Warum
--------------

Ein einfaches jQuery-Plugin, dass per JSON, die aktuelle IP abfragt. Zur Zeit werden DE/CH als Weiche unterstützt.


Installation
--------------

- jQuery einbinden
- Plugin einbinden

```
<script src="geoip.js"></script>
```


- Plugin aktivieren
```javascript
	$("body").geoip({
		chUrl: "URL FÜR CH",
		deUrl: "URL FÜR DE"
	});
``` 	
Konfiguration
--------------

**Empfehlung**
- In der Apache Konfiguration, sollte der Eintrag "server_alias" wie folgt aussehen.
```
	ServerAlias *.domain.tld
```
*Dies hier ist nur wichtig, falls das Script erweitert werden soll*

- Hier können neue "options" hinzugefügt werden.
```javascript
	var settings = $.extend({
		chUrl: "app.ch",
		deUrl: "app.de"
	}, options );
``` 