#!/bin/bash

cd ~/
unzip InstallCert.java.zip
javac InstallCert.java

git clone https://github.com/SEDISH/openhim-mediator-openinfoman-dhis2-sync.git
cd ./openhim-mediator-openinfoman-dhis2-sync
cp /etc/openhim/default.json ./config/default.json
cp /etc/openhim/mediator.json ./config/mediator.json

#install xmllint
sudo apt install xmllint
sudo apt install libxml2-utils
sudo apt install -y jshon

npm install
grunt build

