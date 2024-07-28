#!/bin/bash

npm i
npm run build
rm versequick-web.zip 2> /dev/null
zip -r versequick-web.zip .
scp versequick-web.zip versequick.com:/home/berinaniesh/tmp/
ssh versequick.com deploy-versequick-web.sh
