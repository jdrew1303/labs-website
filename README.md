# Excella Labs Website [ ![Codeship Status for excellalabs/labs-website](https://app.codeship.com/projects/66fa21c0-df4a-0134-e2f2-621d4ad2ab17/status?branch=master)](https://app.codeship.com/projects/204888)
Future home of ExcellaLabs.com
#### [Production URL on Amazon S3](http://excellalabs.s3-website-us-east-1.amazonaws.com)
#### [Development URL on Amazon S3](http://excellalabs.dev.s3-website-us-east-1.amazonaws.com/)

## Getting started
After cloning the repository, run the following commands:
* `npm install` -- this will install the app's dependencies
* `npm start` -- this will bundle everything, start the dev and json servers, and open your default browser to the app

## Publishing from Laptop
* Install AWS CLI
  * Mac: `brew install awscli`
* Log in to AWS CLI with your credentials
  * Run `aws configure`
  * You'll need your Access Key ID and Secret Access Key
  * Default region name: us-east-1
* `npm run aws:login` to get the Docker login statement, copy-paste and run the statement
* `npm run image:build` to build the Docker image
* `npm run image:tag` to properly mark the image (currently only latest is used, but staging and prod labels can determine future staging and prod destinations)
* `npm run image:publish` to publish the image to the ECS repository (then the ECS instance needs to be cycled on AWS GUI to make this image go live -- scripts for doing this from the CLI is being worked on)