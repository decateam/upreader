#!/bin/bash

case $1 in 
	"apache"):
		shift
		exec apache2ctl $@
		;;
	*):
		exec "$@"
		;;
esac

