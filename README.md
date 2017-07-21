# Excella Labs Website

## Getting started
After cloning the repository, run the following commands:
* `npm install` -- this will install the app's dependencies
* `npm start` -- this will bundle everything, start the dev and json servers, and open your default browser to the app

## Building and Testing
* `npm run image:build` to build the Docker image
* `npm run image:debug` to test the Docker image

## Publishing Manually
> Below instruction have not been tested on a Windows environment
* Create `.env` file and set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
  * Sample `.env` file:
  ```Bash
    AWS_ACCESS_KEY_ID=your_own_key_id
    AWS_SECRET_ACCESS_KEY=your_own_secret_key
  ```
* Install AWS CLI
  * Mac: `brew install awscli`
* Log in to AWS CLI with your credentials
  * Run `aws configure`
  * You'll need your Access Key ID and Secret Access Key
  * Default region name: us-east-1
* `npm run aws:publish` to configure Docker with aws, publish your latest image build and release it on ECS