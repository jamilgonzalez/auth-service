<h2>About</h2>

Divie-Auth is an Express backend that's responsible for creating customer accounts, login, and logout. The app is deployed using AWS Lambda fronted by API Gateway.

<h2>Startup Instructions</h2>
 To run this locally, you'll need to:
 
 1. Create an AWS account
 2. Create a dynamoDb table
 3. Create a user in aws for this app with dynamodb read/write permissions
 5. Have access keys and region for aws db config in `docClient.js` file
 6. Create a .env

<h2>Start</h2>

1. If you haven't already, download [nodemon](https://www.npmjs.com/package/nodemon)

2. run `npm start`
