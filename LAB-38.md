* Make a new `googleOAuth` router module that takes in a `code` from Google in order to initiate OAuth on the backend
* Save a new acount in the Mongo database based off the Google response you received
* If an existing user signs in again using Google, you should query the Mongo database for that user and set the user's token as a cookie in the browser
* Use the comments in [lecture code](https://github.com/codefellows/seattle-javascript-401d25/blob/master/back-end/18-asset-management/aws-s3-asset-mgt/src/router/google-oauth-router.js) as a guide for how you should code this process out

## Testing
* These testing requirements are not due until the last day of this rolling lab. TA's will *not* take away points for this specific lab if you don't have Cypress tests ready. **However, it is strongly recommended you still write your tests today**. 
* Continue from Monday's scenario after you succesfully signed up and logged in, and add this scenario:
    * A logged in user clicks on the `Profile` link
    * The Profile form appears and the user creates a new profile
    * The user edits the profile 
    * The user logs out and logs back in  and can view their profile upon clicking the `Profile` link
 * You must stub your API responses and set an `isStubbed` boolean variable in your test. Submit your tests with this boolean set to true so that TA's do not have to make requests to a real server to run your Cypress tests
 * It is not necessary to do any testing regarding the Google OAuth API
 
  * Submit a link to your pull request: https://github.com/ashtonkellis/36-40-fullstack-app/pull/3
  * Submit a question: is this the sort of thing that i will do once by hand, and then never do again because i just use passport instead?
  * observation: the back and forth process of OAUTH is outrageously complicated. i need to spend a solid hour tomorrow just drawing it out.
  * how long you spent: around 5 hours
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
