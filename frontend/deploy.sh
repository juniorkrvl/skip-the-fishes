#!/bin/sh

echo "Getting the endpoint url"
filename="../infrastructure/last_endpoint.txt"
while read -r line
do
    name="$line"
    echo "Name read from file - $name"
done < "$filename"
awk '{gsub(/\$ApiGatewayUrl/,backendUrl);}1' backendUrl="$name" src/environments/environment.temp.ts > src/environments/environment.prod.ts

echo "Building"
npm run build

echo "Syncing"
aws s3 sync ./dist s3://frontend.skip.vdjuniorc.com --delete --acl public-read --cache-control max-age=2592000,public
