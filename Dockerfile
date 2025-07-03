FROM httpd:2.4

FROM jenkins/inbound-agent:4.11-1-jdk11

USER root

RUN apt-get update \
    && apt-get install -y curl \
    && curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.33.0/2025-05-01/bin/linux/amd64/kubectl \
    && chmod +x ./kubectl \
    && mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$HOME/bin:$PATH

USER jenkins

COPY index.html /usr/local/apache2/htdocs/index.html
COPY styles.css /usr/local/apache2/htdocs/styles.css
COPY favicon.ico /usr/local/apache2/htdocs/favicon.ico
COPY script.js /usr/local/apache2/htdocs/script.js
COPY myphoto.JPG /usr/local/apache2/htdocs/myphoto.JPG
COPY ./cert/ /usr/local/apache2/htdocs/cert/
