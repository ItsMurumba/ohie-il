#!/bin/bash

: ${ILR_HOST=ohie-ilr}

export ILR_HOST

cd ~/
unzip InstallCert.java.zip
javac InstallCert.java

curl -LO https://github.com/jembi/openhim-mediator-xds/releases/download/v1.0.3/openhim-mediator-xds-1.0.3.tar.gz
tar -xzf openhim-mediator-xds-1.0.3.tar.gz
rm openhim-mediator-xds-1.0.3.tar.gz

git clone https://github.com/jembi/openhim-mediator-openinfoman-dhis2-sync.git
cd ./openhim-mediator-openinfoman-dhis2-sync
cp /etc/openhim/default.json ./config/default.json
cp /etc/openhim/mediator.json ./config/mediator.json

/utils/replace-vars ./config/mediator.json

npm install
grunt build

