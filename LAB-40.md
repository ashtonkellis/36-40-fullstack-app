## Feature Tasks 
* Deploy your frontend/backend code as demonstrated in lecture today, ensuring you have set up all the proper `env` variables in Heroku settings 
  
### backend
* `NODE_ENV, PORT, and MONGODB_URI` env variables from your backend code **DO NOT** need to be manually input into your Heroku config vars, Heroku will give you these
  * Remember to provision mLab to get a `MONDODB_URI` in your Heroku config vars when deploying backend code
  * Rewatch the [backend deployment lecture](https://www.youtube.com/watch?v=WmEaGQpXflo&index=25&list=PLVngfM2hsbi_nzdZ4BtnOQX2GvPpJlz44&t=0s) to remind yourself how to do deploy your backend code

### frontend
* Ensure your front end has an `index.js` and you have installed Express via `npm i express` so you can serve your front end code through Heroku
* Ensure your front end `package.json` has the following scripts in order to work properly:
```
"start": "npm run build && node index.js",
"heroku-prebuild": "npm uninstall cypress",
"heroku-postbuild": "webpack --progress --config webpack.prod.js"
```
* Run the script `npm run build` in the root of your frontend code to generate a `build` folder that has all the bundled modules you need for your app (`main[hash].js, main[hash].css, index.html, any related image assets`)
* Create a new S3 bucket and drop your bundled files into it
* Go to Amazon Cloudfront in your AWS console and create a new CDN for your S3 bucket
* Go to your Heroku settings of your deployed front end, click on `Config Vars`, and add a variable called `CDN_URL` equal to the AWS Cloudfront domain you generated
* **Delete your build folder from your local project**

 
## Testing 
* Review the prior labs that had testing requirements and **complete those testing requirements when you submit this lab**. 
  * [Lab 36 Testing Requirements](https://github.com/seattle-javascript-401d25/36-40-fullstack-app#testing-dont-worry-about-this-today)
  * [Lab 38 testing Requirements](https://github.com/seattle-javascript-401d25/36-40-fullstack-app/blob/master/LAB-38.md#testing)
  

##  Documentation  
Write a description of the project in your README.md. 

## Submission Instructions
  * Submit a link to your pull request:
  * Submit the following three links
     * Your deployed Heroku frontend: 
     * Your deployed Heroku backend: 
     * Your Amazon Cloudfront CDN URL, with a pathname to a file that is in your related S3 bucket, i.e, assuming your bucket has an `index.html` file, you would also include: 
       ```
       http://my-generated-cloudfront-cdn-url/index.html
       ```
  * Submit a question:
  * observation:
  * how long you spent on canvas:
  * Submit the Github URL to the backend repo:
  * frontenv .env variables
  ```
    API_URL=http://localhost:3000/api
    GOOGLE_OAUTH_ID=816513421140-3fedtqb77dveh2lj1802702k69jerfjq.apps.googleusercontent.com
  ```
  * backend .env variables
  ```
    NODE_ENV=development
    PORT=3000
    MONGODB_URI=mongodb://localhost/yourOwnDBNameHere
    SECRET_KEY=helloWorldkdsjflad
    TWILIO_ACCOUNT_SID=ACa95d84e8c74b9854d72577673a672dc0
    TWILIO_AUTH_TOKEN=ad5276912d2a085c1dfd2f052524d9d8
    TWILIO_NUMBER=+14159414643
    CORS_ORIGINS=http://localhost
    GOOGLE_OAUTH_ID=816513421140-3fedtqb77dveh2lj1802702k69jerfjq.apps.googleusercontent.com
    GOOGLE_OAUTH_SECRET=NhsVDkkzOiNhEMHx6kHdxUsV
    CLINENT_URL=http://localhost:8080
    API_URL=http://localhost:3000/api
    AWS_BUCKET=ashton-lab-39
  ```
