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

#run mediators
cd ~/
echo "1" | java InstallCert localhost:8080
cp jssecacerts /usr/lib/jvm/java-7-openjdk-amd64/jre/lib/security
java -jar mediator-xds-1.0.3-jar-with-dependencies.jar --conf mediator.properties
