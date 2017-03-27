#!/bin/bash

: ${IL_IMPORT_CERT=false}
: ${IL_CERT_PATH=/var/openhim/server.crt}
: ${IL_KEY_PATH=/var/openhim/server.key}

export IL_IMPORT_CERT
export IL_CERT_PATH
export IL_KEY_PATH

/utils/replace-vars /etc/openhim/core.json

openhim-core --conf=/etc/openhim/core.json --cluster=auto &

sleep 30
mongo mongodb://mongodb_demo/openhim /mongo.js

#Command which will keep container up
tail -F /usr/lib/node_modules/openhim-core/docs/how-to/how-to-do-an-openhim-core-release.md
