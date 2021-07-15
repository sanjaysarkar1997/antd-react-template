echo "Hi sanjay, don't worry I am here for you." | boxes -d boy

echo "> Your app is deploying"

BUCKET_NAME="a-cli-react"

npm run build
aws s3 sync build/ s3://$BUCKET_NAME --acl public-read
