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
      "requestBody": true,
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
}, shr_channel = {
      "requestBody": true,
      "responseBody": true,
      "matchContentRegex": null,
      "matchContentXpath": null,
      "matchContentValue": null,
      "matchContentJson": null,
      "name": "XDS repository and registry",
      "urlPattern": "^/xdsrepository|/xdsregistry",
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
          "name": "XDS.b Mediator",
          "secured": false,
          "host": "localhost",
          "port": 8500,
          "path": "",
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
        "shr"
      ],
      "type": "http"
};

db.clients.insert(ilr_client);
db.channels.insert(ilr_channel);
db.channels.insert(ilr_static_channel);

db.channels.insert(dhis2_channel);

db.clients.insert(shr_client);
db.channels.insert(shr_channel);
