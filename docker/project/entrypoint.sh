#!/bin/bash

if [ ! -d "/home/docker/node_modules" ]; then
  npm install
  
fi

chmod 777 -R /home/docker/node_modules

case $1 in 
	"npm"):
		shift
		npm "$@"
		;;
	*):
		exec "$@"
		;;
esac

