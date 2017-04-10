#!/bin/bash

cd ~/
unzip InstallCert.java.zip
javac InstallCert.java

curl -LO https://github.com/jembi/openhim-mediator-xds/releases/download/v1.0.3/openhim-mediator-xds-1.0.3.tar.gz
tar -xzf openhim-mediator-xds-1.0.3.tar.gz
