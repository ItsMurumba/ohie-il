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

#install openhim
RUN sudo apt-get update
RUN sudo apt-get -y install software-properties-common python-software-properties
RUN sudo apt-get update
RUN sudo add-apt-repository ppa:openhie/release
RUN sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN sudo echo 'deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse' | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN sudo apt-get update
COPY openhim-core /etc/init.d/openhim-core
RUN sudo chmod 777 /etc/init.d/openhim-core
RUN sudo apt-get -y install openhim-core-js openhim-console

EXPOSE 8080

