FROM ubuntu:16.04

RUN apt-get update

RUN apt-get install -y npm dos2unix

COPY ./docker/project/entrypoint.sh /entrypoint

RUN chmod +x /entrypoint \
    && dos2unix /entrypoint \
    && ln -s /usr/bin/nodejs /usr/sbin/node

WORKDIR /home/docker

ENTRYPOINT ["/entrypoint"]

CMD ["npm", "run-script", "watch"]
