#!/bin/sh

export MATTERMOST_ENDPOINT=/hubot/incoming # listen endpoint
export MATTERMOST_CHANNEL=town-square # optional: if you want to override your channel
export MATTERMOST_INCOME_URL=http://localhost:8065/hooks/tc43iuj4apg37g496j4k8r9t9w # your mattermost income url
export MATTERMOST_TOKEN=qohqjtahmf8x5q6a8xyxfuerde # your mattermost token
export MATTERMOST_ICON_URL=https://s3-eu-west-1.amazonaws.com/renanvicente/toy13.png # optional: if you want to override hubot icon
export MATTERMOST_HUBOT_USERNAME="mmbot" # optional: if you want to override hubot name
export MATTERMOST_SELFSIGNED_CERT=true # optional: if you want to ignore self signed certificate
export HUBOT_LOG_LEVEL=debug

#node_modules/forever/bin/forever start ./bin/www
./bin/hubot -a mattermost -n mmbot

