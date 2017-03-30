#!/bin/bash

: ${IL_IMPORT_CERT=false}
: ${IL_CERT_PATH=/var/openhim/server.crt}
: ${IL_KEY_PATH=/var/openhim/server.key}
: ${ILR_HOST=ohie-ilr}

export IL_IMPORT_CERT
export IL_CERT_PATH
export IL_KEY_PATH
export ILR_HOST

/utils/replace-vars /etc/openhim/core.json

openhim-core --conf=/etc/openhim/core.json --cluster=auto &

sleep 20
/utils/replace-vars /etc/openhim/mongo.js
mongo mongodb://mongodb_demo/openhim /etc/openhim/mongo.js

#Command which will keep container up
tail -F /usr/lib/node_modules/openhim-core/docs/how-to/how-to-do-an-openhim-core-release.md
