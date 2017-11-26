#!/bin/sh

# Create Backend Environment
echo "Warm up and dependencies check"
cd ../backend && . venv/bin/activate
pip install -r requirements.txt

echo "Uploading backend"
zappa update dev

deactivate
cd ../infrastructure

# Create Frontend Environment
echo "Warm up and dependencies check"
cd ../frontend && npm install

echo "Building"
npm run build

echo "Creating environment"
cd ../infrastructure
aws cloudformation update-stack --stack-name skip-challenge-frontend --template-body file://cloudformation/frontend.json
aws cloudformation wait stack-update-complete --stack-name skip-challenge-frontend

echo "Uploading Website"
cd ../frontend
aws s3 sync ./dist s3://frontend.skip.vdjuniorc.com --delete --acl public-read --cache-control max-age=2592000,public