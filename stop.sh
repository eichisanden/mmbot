#!/bin/sh

node_modules/forever/bin/forever stop ./bin/www
node_modules/forever/bin/forever stop ./node_modules/hubot/bin/hubot

