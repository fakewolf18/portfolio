FROM httpd:2.4
COPY index.html /usr/local/apache2/htdocs/index.html
COPY styles.css /usr/local/apache2/htdocs/styles.css
COPY favicon.ico /usr/local/apache2/htdocs/favicon.ico
COPY script.js /usr/local/apache2/htdocs/script.js
COPY myphoto.JPG /usr/local/apache2/htdocs/myphoto.JPG
COPY ./cert/ /usr/local/apache2/htdocs/cert/