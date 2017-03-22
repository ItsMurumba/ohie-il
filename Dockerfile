#
# Ubuntu 14.04
#
# https://hub.docker.com/_/ubuntu/
#

# Pull base image.
FROM uwitech/ohie-base

USER root

#install tools

RUN apt-get update
RUN apt-get -y install wget
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get -y install nodejs
RUN apt-get -y install git build-essential
RUN apt-get -y install software-properties-common python-software-properties

#install openhim

RUN npm -y install -g openhim-core
RUN mkdir /etc/openhim
COPY default.json /etc/openhim/core.json

COPY run.sh /run.sh
RUN chmod +x /run.sh
CMD /run.sh

EXPOSE 8080
