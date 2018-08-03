  ## Feature Tasks 
* Create a new component that is a form which has an `<input type="file />` tag, which accepts a file upload
* Determine the best place in your app this component should go. In lecture, the component was placed in `Dashboard`, but this may not be the best place for you app.
* Use the File Reader API to show a preview of that file upload
* Setup new sync and async action creators that make a request to your asset upload route on your backend 
* Make a new reducer for your asset and remember to place it in your `reducer/main` reducer module that exports `combineRedudcers`
* Create a `drop zone` in your form component so a user can drag and drop files from their own hard drive with ease 
* **NOT PROVIDED IN LECTURE CODE, FIGURE THIS OUT ON YOUR OWN**: After succesful upload of your asset to Amazon S3, display your uploaded assets in a list on the page. This may need to be its own component that has access to the Redux store. 

##  Documentation  
Write a description of the project in your README.md
 
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas: 
  * Submit a question: 
  * observation: 
  * and how long you spent on canvas: 
  * Submit the Github URL to the backend repo you selected: https://github.com/ashtonkellis/RemindR
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
  ```
