## Overview

The project can be used to fetch details of different accounts present in an AWS Organization. The frontend is build in ReactJS with AWS Lambda in Python and API Gateway used to invoke AWS Organization service in the backend.

## Implementation Pre-equisite

- An active AWS Master Account with AWS Oraganization enabled having sub-accounts. 

## Implementation Local Setup 

- Create a Lambda function in the AWS Account and paste the python code provided in directory `/python-lambda/dynamoLambda.py`
- We need to pass Organization Unit ID to the lambda function for fetching all accounts inside the OU id. Below is the JSON request.

```
{
  "ParentId": "Enter yourou id"
}
```
- Create a post API in the AWS Account using API Gateway service that invokes the lambda created in previous step.
- Test the API with the same request and if it is successful we should get a valid response with account details.
- Clone the repository https://github.com/ranopriyo-neogy/aws-organizations-viewer.git
- Get into the project directory using `cd aws-org-viewer`
- Enter the API Gateway end point in `/src/axios.js`
- Inside `components/users/users.js` enter the OU ids in dropdown based on which you need to pick OU ids for displaying the accounts within that specific OU.

```
              <TreeNode
                value="r-root-ou-id"  // Replace with your specific ou ids.
                title={<b style={{ color: "#08c" }}>root</b>}
              >
                <TreeNode
                  value="ou-id-1" // Replace with your specific ou ids.
                  title={<b style={{ color: "#210f03" }}>closed-accounts</b>}
                />
                <TreeNode
                  value="ou-id-2"  // Replace with your specific ou ids.
                  title={<b style={{ color: "#210f03" }}>ou-marek-1</b>}
                />
                <TreeNode
                  value="ou-id-3"   // Replace with your specific ou ids.
                  title={<b style={{ color: "#210f03" }}>ou-marek-2</b>}
                />
                <TreeNode
                  value="ou-id-4"  // Replace with your specific ou ids.
                  title={<b style={{ color: "#210f03" }}>ou-some-compliance</b>}
                />
                <TreeNode
                  value="ou-id-5"  // Replace with your specific ou ids.
                  title={<b style={{ color: "#08c" }}>ou-test</b>}
                >
                  <TreeNode
                    value="ou-id-6"  // Replace with your specific ou ids.
                    title={<b style={{ color: "#210f03" }}>test-inside-ou</b>}
                  />
                </TreeNode>
                <TreeNode
                  value="ou-id-7"   // Replace with your specific ou ids.
                  title={<b style={{ color: "#210f03" }}>stackset-testing</b>}
                />
```
- Run `npm install` to install all required packages.
- Run `npm start` to run this on your localhost at port 3000.  

## Hosting

TBD - Amplify 

## Authentication

TBD - Cognito and OneLogin using Amplify

## Developer

- [Ranopriyo Neogy](https://github.com/ranopriyo-neogy)