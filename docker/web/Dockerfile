FROM ubuntu:16.04

RUN apt-get update

RUN apt-get install -y apache2 dos2unix \
    && a2enmod rewrite 
    
COPY ./docker/web/web.conf /etc/apache2/sites-available/web.conf
COPY ./docker/web/entrypoint.sh /entrypoint
    
RUN a2ensite web \
    && a2dissite 000-default \
    && chmod +x /entrypoint \
    && dos2unix /entrypoint
    
EXPOSE 80 443

ENTRYPOINT ["/entrypoint"]

CMD ["apache", "-D", "FOREGROUND"]
