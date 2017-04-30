# Production and Development Ready - React, Redux, Webpack Boilerplate

> I have created this Boilerplate from StephenGrider's tutorial on Webpack. I wanted to set this up to make it easier to spin up
production ready apps in React. I have tried to made it easy to switch between dev environment and production. There are various technologies that I will include below that I have found make my life easier when developing. I will be narrowing the code down so I have a complete starting point to start developing from using React, Redux and React Router.


## Deployment Options

**Prerequisites**
1. Heroku Account with CLI installed
2. AWS Account with CLI installed

Remember to run the following command in the Terminal before you start deployment because we need to application to be compiled and ready for distribution before we deploy:
```javascript
npm run build
```
As part of the command we are running above we are executing the following `NODE_ENV=production npm run clean && webpack -p`. This will set the NODE_ENV variable to production and also clean up the the current `dist` directory. Webpack will then run to compile our code in the nessarsary files. See later webpack config where we are optimising the code with webpack.


### Heroku
```javascript
//Heroku config within Procfile
web: node server.js
```
Heroku deplyment is really simple:-

```
git init
git add .
git commit -am 'your commit message'
heroku create 'your app name'
git push heroku master
```


---
### AWS Elastic Beanstalk
```javascript
//EBS Needs a start script in the package JSON
"start": "node server.js"
```
#### Command Line
`Command line` setup for EB make sure you have added
and commited your code before running this the next
steps

`eb init`
1. Choose region
2. Provide AWS credentials
3. Choose a application name
4. Confirm your using node
5. Choose no to CodeCommit
6. Choose yes to SSH for later use
7. Setup key pairs

`eb create`

1. Choose environment name - select default
2. Choose DNS CNAME prefix - select default
3. Choose

#### AWS Website
I found the best way to deploy to AWS Elastic Beanstalk is to zip up all the files within your root directory and then follow the deployment step on AWS' site. I will try again to deploy bia the command line and add the steps later.

---
