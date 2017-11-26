echo "Undeploy zappa app"
cd ../backend && . venv/bin/activate
zappa  undeploy dev

echo "Deleting website files"
aws s3 rm s3://frontend.skip.vdjuniorc.com --recursive

echo "Deleting cloudformatin stack"
aws cloudformation delete-stack --stack-name skip-challenge-frontend
aws cloudformation wait stack-delete-complete --stack-name skip-challenge-frontend