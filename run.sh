#!/bin/bash

: ${IL_IMPORT_CERT=false}
: ${IL_CERT_PATH=/var/openhim/server.crt}
: ${IL_KEY_PATH=/var/openhim/server.key}
: ${ILR_HOST=ohie-ilr}
: ${IL_PASSWORD=openhim-password}

export IL_IMPORT_CERT
export IL_CERT_PATH
export IL_KEY_PATH
export ILR_HOST
export IL_PASSWORD

/utils/replace-vars /etc/openhim/core.json

openhim-core --conf=/etc/openhim/core.json --cluster=auto &

sleep 20
/utils/replace-vars /etc/openhim/mongo.js
mongo mongodb://mongodb_demo/openhim /etc/openhim/mongo.js

#run mediators

/utils/replace-vars /root/mediator.properties

cd ~/openhim-mediator-openinfoman-dhis2-sync/
/utils/replace-vars ./config/default.json
node lib/server.js &

cd ~/
echo "1" | java InstallCert localhost:8080
cp jssecacerts /usr/lib/jvm/java-7-openjdk-amd64/jre/lib/security
java -jar mediator-xds-1.0.3-jar-with-dependencies.jar --conf mediator.properties
