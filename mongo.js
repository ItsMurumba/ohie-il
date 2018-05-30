var ilr_client = {
      'clientID': 'openinfoman',
      'name': 'OpenInfoMan',
      'passwordAlgorithm': 'sha512',
      "passwordSalt": '72a00618ac4493ce12d833d4cf9a975f',
      'passwordHash':'f1c79ab2cf8b5c7c9ab0c701433ae1499d7511d206f3b272913d0d1762c1ebf177bc7540cf58e885f8e2955359f913c4ffa6b8772f7eeb7aa4dbc634b0dd2349',
      'roles': ['irl'],
      '__v': 0
}, ilr_channel = {
      "name": "Interlinked Registry",
      "urlPattern": "^/CSD",
      "allow": [
        "irl"
      ],
      "routes": [
        {
          "name": "IRL route",
          "primary": true,
          "host": "ohie-ilr",
          "port": 8984,
          "secured": false,
          "path": "",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "http"
        }
      ],
      "tcpPort": null,
      "tcpHost": null,
      "pollingSchedule": null,
      "matchContentJson": null,
      "matchContentValue": null,
      "matchContentXpath": null,
      "matchContentRegex": null,
      "responseBody": true,
      "requestBody": false,
      "type": "http",
      "whitelist": [],
      "authType": "private",
      "matchContentTypes": [],
      "properties": [],
      "txViewAcl": [],
      "txViewFullAcl": [],
      "txRerunAcl": [],
      "alerts": [],
      "status": "enabled",
      "rewriteUrls": true,
      "addAutoRewriteRules": true,
      "rewriteUrlsConfig": [],
      "autoRetryEnabled": false,
      "autoRetryPeriodMinutes": 60
}, ilr_static_channel = {
      "requestBody": true,
      "responseBody": true,
      "urlPattern": "^/static",
      "name": "Interlinked Registry /static",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "password": "",
          "username": "",
          "primary": true,
          "pathTransform": "",
          "path": "",
          "port": 8984,
          "host": "ohie-ilr",
          "secured": false,
          "name": "IRL Static Route",
          "forwardAuthHeader": false,
          "status": "enabled",
          "type": "http"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "irl"
      ],
      "type": "http"
}, dhis2_channel = {
      "requestBody": true,
      "responseBody": true,
      "urlPattern": "^/dhis",
      "name": "DHIS2",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "addAutoRewriteRules": true,
      "rewriteUrls": true,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "password": "",
          "username": "",
          "primary": true,
          "pathTransform": "s/^\\/dhis/\\/api\\/26/g",
          "path": "",
          "port": 8080,
          "host": "ohie-fr",
          "secured": false,
          "name": "DHIS2 Route",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "http"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "dhis2"
      ],
      "type": "http"
}, shr_client = {
      "clientID": "openshr",
      "name": "OpenSHR",
      "passwordAlgorithm": "sha512",
      "passwordSalt": "3e637f781d62df561c0ccf994ba5fb9a",
      "passwordHash": "ac0d1328c30042fff5ecc33bc54701202edfc0f6ccf82ae3aa349b5708ef7985d2283607c479eedf1f4ade892a286058a6f0ce8bc233fcd8ac8d108111ec10dc",
      "roles": [
        "shr"
      ]
}, pix_client = {
      "clientID": "pixc",
      "name": "pixc",
      "passwordAlgorithm": "sha512",
      "passwordSalt": "c84dadde8f7e3b26b7b4e671fcba7284",
      "passwordHash": "c6adc8ae2abc6067850b7c50d435cd6c2b2185cbd05288c7e344e04bc0804e324efb0bd758b0c6c7eb61b5878db423f3dfa9449734cfcb94f116b93594012a46",
      "roles": [
        "pix"
      ]
}, pix_channel = {
      "requestBody": true,
      "responseBody": true,
      "name": "OHIE: PIX",
      "urlPattern": "^/pix",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "name": "PIX Route",
          "secured": false,
          "host": "ohie-cr",
          "port": 3600,
          "path": "",
          "pathTransform": "",
          "primary": true,
          "username": "",
          "password": "",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "mllp"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "pix"
      ],
      "type": "http"
}, pdq_channel = {
     "requestBody": true,
      "responseBody": true,
      "name": "OHIE: PDQ",
      "tcpHost": null,
      "tcpPort": null,
      "urlPattern": "^/pdq",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "password": "",
          "username": "",
          "primary": true,
          "pathTransform": "",
          "path": "",
          "port": 3700,
          "host": "ohie-cr",
          "secured": false,
          "name": "PDQ route",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "mllp"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "pix"
      ],
      "type": "http"
},dhis_mediator_channel = {
	"name": "OpenInfoMan-DHIS2 Sync",
	"pollingSchedule": "0 0 * * 0",
	"urlPattern": "^/_infomansync$",
	"autoRetryPeriodMinutes": 60,
	"autoRetryEnabled": false,
	"rewriteUrlsConfig": [],
	"addAutoRewriteRules": true,
	"rewriteUrls": false,
	"status": "enabled",
	"alerts": [],
	"txRerunAcl": [],
	"txViewFullAcl": [],
	"txViewAcl": [],
	"properties": [],
	"matchContentTypes": [],
	"routes": [
	{
	  "name": "OpenInfoMan-DHIS2 Sync Trigger",
	  "host": "localhost",
	  "port": 5012,
	  "path": "/trigger",
	  "primary": true,
	  "forwardAuthHeader": true,
	  "status": "enabled",
	  "type": "http"
	}
	],
	"authType": "private",
	"whitelist": [],
	"allow": [
	  "internal"
	],
	"type": "polling"
}, xds_client = {
      "clientID": "xds",
      "name": "xds",
      "passwordAlgorithm": "sha512",
      "passwordSalt": "08eeaf9361bfa6efa5dcacd50b3bf8c9",
      "passwordHash": "b6fc7613d3ef8583770745b2c39cbb3d4bc49c2bd50e307eff66aa48b8f68151b710c0ee8f381111723727fc0dc9e333d1157ba290db680a298d288f7e2fc312",
      "roles": [
        "xdsRole"
      ]
}, xds_mediator_channel = {
      "name": "XDS.b Mediator",
      "urlPattern": "^/xds(registry|repository)$",
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "secured": false,
          "primary": true,
          "port": 8500,
          "host": "localhost",
          "name": "XDS.b Mediator",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "http"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "xds",
        "xdsRole"
      ],
      "type": "http",
      "tcpPort": null,
      "tcpHost": null,
      "pollingSchedule": null,
      "matchContentJson": null,
      "matchContentValue": null,
      "matchContentXpath": null,
      "matchContentRegex": null

}, xds_mediator_dsub_channel = {
      "name": "XDS.b Mediator dsub",
      "urlPattern": "^/dsub$",
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "secured": false,
          "primary": true,
          "port": 8500,
          "host": "localhost",
          "name": "XDS.b Mediator dsub",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "http"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "xds",
        "xdsRole"
      ],
      "type": "http",
      "tcpPort": null,
      "tcpHost": null,
      "pollingSchedule": null,
      "matchContentJson": null,
      "matchContentValue": null,
      "matchContentXpath": null,
      "matchContentRegex": null

}, openshr_xds_registry_channel = {
      "requestBody": false,
      "responseBody": true,
      "name": "OpenSHR XDS Registry",
      "urlPattern": "^/SHRXDSRegistry$",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "name": "OpenSHR XDS Registry",
          "secured": false,
          "host": "openshr",
          "port": 8080,
          "path": "/openmrs/ms/xdsrepository",
          "pathTransform": "",
          "primary": true,
          "username": "",
          "password": "",
          "forwardAuthHeader": false,
          "status": "enabled",
          "type": "http"
        }
      ],
      "authType": "public",
      "whitelist": [],
      "allow": [],
      "type": "http"
}, nationalFingerprint_client = {
      "clientID": "nationalFingerprintClient",
      "name": "nationalFingerprintClient",
      "passwordAlgorithm": "sha512",
      "passwordSalt": "97d1a3d80060d94fcd1ffb311d88c516",
      "passwordHash": "4cd9e878e35c2bbe88166c33fc84a38718045df9ec73331eea3f5e37a52027ee4c85a5eef58a058fe2e229b9ba7d45c2c7826bd7862b06b17c8c29a42370bf2d",
      "roles": [
        "fingerprintRole"
      ]
}, nationalFingerprint_channel = {
      "requestBody": true,
      "responseBody": true,
      "name": "National Fingerprint Channel",
      "urlPattern": "^/nfp$",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "name": "National Fingerprint Server",
          "secured": false,
          "host": "$FINGERPRINT_HOST",
          "port": 80,
          "path": "/M2Sys.BioPluginWeb/BioPluginServiceV8.asmx",
          "pathTransform": "",
          "primary": true,
          "username": "",
          "password": "",
          "forwardAuthHeader": false,
          "status": "enabled",
          "type": "http"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "fingerprintRole"
      ],
      "type": "http"
}, scc_client = {
      "clientID": "scc",
      "name": "scc",
      "passwordAlgorithm": "sha512",
      "passwordSalt": "c84dadde8f7e3b26b7b4e671fcba7284",
      "passwordHash": "F67FA8D9D06DDC46B8C58BC2046244DBCCA2EACFB2836E21E0E137A9474C56A88B26075CC783748DC6323E057DA6FF382579952AAA6B94AE1AEF0D67E3356FA3",
      "roles": [
        "sccRole"
      ]
}, scc_channel = {
      "requestBody": true,
      "responseBody": true,
      "name": "SCC",
      "urlPattern": "^/scc",
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "pollingSchedule": null,
      "tcpHost": null,
      "tcpPort": null,
      "autoRetryPeriodMinutes": 60,
      "autoRetryEnabled": false,
      "rewriteUrlsConfig": [],
      "addAutoRewriteRules": true,
      "rewriteUrls": false,
      "status": "enabled",
      "alerts": [],
      "txRerunAcl": [],
      "txViewFullAcl": [],
      "txViewAcl": [],
      "properties": [],
      "matchContentTypes": [],
      "routes": [
        {
          "name": "SCC Route",
          "secured": false,
          "host": "ohie-cr",
          "port": 3600,
          "path": "",
          "pathTransform": "",
          "primary": true,
          "username": "",
          "password": "",
          "forwardAuthHeader": true,
          "status": "enabled",
          "type": "mllp"
        }
      ],
      "authType": "private",
      "whitelist": [],
      "allow": [
        "sccRole"
      ],
      "type": "http"
};

db.clients.insert(ilr_client);
db.channels.insert(ilr_channel);
db.channels.insert(ilr_static_channel);

db.channels.insert(dhis2_channel);

db.clients.insert(shr_client);

db.clients.insert(pix_client);
db.channels.insert(pix_channel);
db.channels.insert(pdq_channel);

db.channels.insert(dhis_mediator_channel);

db.clients.insert(xds_client);
db.channels.insert(xds_mediator_channel);
db.channels.insert(xds_mediator_dsub_channel);

db.channels.insert(openshr_xds_registry_channel);

db.clients.insert(nationalFingerprint_client);
db.channels.insert(nationalFingerprint_channel);

db.clients.insert(scc_client);
db.channels.insert(scc_channel);
