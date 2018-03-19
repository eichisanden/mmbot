#!/bin/sh

export MATTERMOST_ENDPOINT=/hubot/incoming # listen endpoint
export MATTERMOST_CHANNEL=town-square # optional: if you want to override your channel
export MATTERMOST_INCOME_URL=http://localhost:8080/hooks/ncwc66caqf8d7c4gnqby1196qo # your mattermost income url
export MATTERMOST_TOKEN=oqwx9d4khjra8cw3zbis1w6fqy # your mattermost token
export MATTERMOST_ICON_URL=https://s3-eu-west-1.amazonaws.com/renanvicente/toy13.png # optional: if you want to override hubot icon
export MATTERMOST_HUBOT_USERNAME="mmbot" # optional: if you want to override hubot name
export MATTERMOST_SELFSIGNED_CERT=true # optional: if you want to ignore self signed certificate
export HUBOT_LOG_LEVEL=debug

node_modules/forever/bin/forever start ./bin/www
node_modules/forever/bin/forever start ./node_modules/hubot/bin/hubot -a mattermost

