# Code Build

AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. With CodeBuild, you don't need to provision, manage, and scale your own build servers. CodeBuild scales continuously and processes multiple builds concurrently, so your builds are not left waiting in a queue.

## Build Config

version: 0.2

phases:

pre_build:

commands:

- echo Logging in to Amazon ECR...

- aws --version

- $(aws ecr get-login --region $AWS_DEFAULT_REGION --no-include-email)

- REPOSITORY_URI=331916247734.dkr.ecr.ap-south-1.amazonaws.com/example-repo

- COMMIT_HASH=$(echo $CODEBUILD_RESOLVED_SOURCE_VERSION | cut -c 1-7)

- IMAGE_TAG=${COMMIT_HASH:=latest}

build:

commands:

- echo Build started on `date`

- echo Building the Docker image...

- docker build -t $REPOSITORY_URI:latest .

- docker tag $REPOSITORY_URI:latest $REPOSITORY_URI:$IMAGE_TAG

post_build:

commands:

- echo Build completed on `date`

- echo Pushing the Docker images...

- docker push $REPOSITORY_URI:latest

- docker push $REPOSITORY_URI:$IMAGE_TAG

## IAM auth

{
"Version": "2012-10-17",
"Statement": [
{
"Effect": "Allow",
"Action": [
"ecr:GetAuthorizationToken",
"ecr:InitiateLayerUpload",
"ecr:UploadLayerPart",
"ecr:CompleteLayerUpload",
"ecr:BatchCheckLayerAvailability",
"ecr:PutImage"
],
"Resource": "*"
}
]
}

<https://dev.to/raphael_jambalos/automate-docker-build-with-aws-codebuild-9om>

<https://docs.aws.amazon.com/codebuild/latest/userguide/sample-docker.html>

<https://dev.to/kylegalbraith/how-to-build-your-docker-images-in-aws-with-ease-3174>

## Caching docker builds

<https://aws.amazon.com/blogs/devops/improve-build-performance-and-save-time-using-local-caching-in-aws-codebuild>

<https://docs.aws.amazon.com/codebuild/latest/userguide/build-caching.html>
