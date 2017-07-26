# Excella Labs Website
> Excella Labs is a place for Excella’s technologists to share the new and experimental projects we're working on.

## Tech Stack and Architecture
- `create-react-app`
- ReactJS
- Express
- Node
- Alpine Linux

## DevOps Stack
- npm scripts to build ReactJS app leveraging `react-scripts`
- npm scripts to build container images leveraging [minimal-node-web-server](https://hub.docker.com/r/duluca/minimal-node-web-server/) and `docker cli` tools
- npm scripts to deploy application leveraging `aws cli tools` with a no-downtime blue/green deployment scheme
- TravisCI (work in progress)

## Hosting Environment
- Highly-available resilient configuration
  - AWS ECS Cluster running two `m4` class EC2 instances across two availability zones (AZs)
  - ECS managed Application Load Balancer (ALB) maintaining minimum two containers/tasks running during normal operation
  - Four containers running during blue/green deployment
- Lot's of headroom for auto-scaling setup and running more experimental apps -- see performance numbers below
- Domain and SSL certificated hosted using Route53
- HTTP/HTTPS routing and reverse proxy managed by ALB, including SSL cert application
- HTTP -> HTTPS routing enforced by [minimal-node-web-server](https://hub.docker.com/r/duluca/minimal-node-web-server/)
  
## Performance Numbers
- Dokcer Container image size ~60mb
- RAM usage at idle ~65mb per container
- ~2,200 user per second, Cluster utilization: 6.6% cpu, 1.5% mem
- TODO: Further optimize throughput and latency by hosting image assets on S3 and utilizing CloudFront for caching static assets

## For Developers
### Running the Code
After cloning the repository, run the following commands:
* `npm install` -- this will install the app's dependencies
* `npm start` -- this will bundle everything, start the dev and json servers, and open your default browser to the app

### Building and Testing
* `npm run image:build` to build the Docker image
* `npm run image:debug` to test the Docker image

### Push Button Deployments
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
