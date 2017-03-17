#
# Ubuntu 14.04
#
# https://hub.docker.com/_/ubuntu/
#

# Pull base image.
FROM ubuntu:14.04

USER root

#install wget
RUN sudo apt-get update
RUN sudo apt-get -y install wget
RUN sudo apt-get -y install nodejs
RUN sudo apt-get -y install npm
RUN sudo apt-get -y install nano

#install openhim
RUN sudo apt-get update
RUN sudo apt-get -y install software-properties-common python-software-properties
RUN sudo apt-get update
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
RUN sudo apt-get -y install git build-essential
RUN sudo npm -y install -g openhim-core
RUN wget https://raw.githubusercontent.com/jembi/openhim-core-js/master/config/default.json
RUN sudo mkdir /etc/openhim
RUN sudo mv default.json /etc/openhim/core.json
CMD openhim-core --conf=/etc/openhim/core.json --cluster=auto >> /var/log/openhim-core.log 2>&1

EXPOSE 8080

