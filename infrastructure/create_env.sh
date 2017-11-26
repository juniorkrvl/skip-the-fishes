#!/bin/sh

# Create Backend Environment
echo "Wrm up and dependencies check"
cd ../backend && . venv/bin/activate
pip install -r requirements.txt

echo "Uploading backend"
zappa_endpoint=$(zappa deploy dev | egrep -o 'https?://[^ ]+')
echo $zappa_endpoint
echo $zappa_endpoint >> ../infrastructure/last_endpoint.txt

deactivate
cd ../infrastructure

# Create Frontend Environment
echo "Warm up and dependencies check"
cd ../frontend && npm install
awk '{gsub(/\$ApiGatewayUrl/,backendUrl);}1' backendUrl="$zappa_endpoint" src/environments/environment.temp.ts > src/environments/environment.prod.ts

echo "Building"
npm run build

echo "Restarting Env Config"
# mv src/environments/environment.temp.ts src/environments/environment.prod.ts

echo "Creating environment"
cd ../infrastructure
aws cloudformation create-stack --stack-name skip-challenge-frontend --template-body file://cloudformation/frontend.json
aws cloudformation wait stack-create-complete --stack-name skip-challenge-frontend

echo "Uploading Website"
cd ../frontend
aws s3 sync ./dist s3://frontend.skip.vdjuniorc.com --delete --acl public-read --cache-control max-age=2592000,public