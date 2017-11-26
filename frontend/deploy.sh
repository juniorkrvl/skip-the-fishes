#!/bin/sh

echo "Building"
npm run build

echo "Syncing"
aws s3 sync ./dist s3://frontend.skip.vdjuniorc.com --delete --acl public-read --cache-control max-age=2592000,public
