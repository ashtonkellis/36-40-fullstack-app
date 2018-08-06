## TODO
- [ ] make sure CORS configuration in S3 is correct (aug 6 @ 9:35). You might need this if you have a problem connecting your deployed app to your S3 bucket
- [ ] add devlogger function from utils.js
- [ ] add validation to auth form (vid 10:50);
## NOTES:
1. if you see an options method, but not the CRUD method, then you're probably having a problem with CORS

## Feature Tasks 
* Add error handling for a 409 conflict error if a user submits a username or email that is already in the database
* Deploy your frontend app with these new changes and submit the Heroku URL
* **Your deployed app must be at an MVP working state to get full credit. The MVP deployed requirements are:**
    * You must be able to sign up or login and see your `/dashboard` page
    * You must be able to create AND edit a new profile, and upon logging out and logging in, see that same profile
    * You must be able to upload photos successfully, and see those photos displayed on the page upon each login session
    * Remember, cookies are NOT cached on the Heroku free tier, so don't worry about persisting login sessions for now.
* Because of the cookie restrictions on deployment, Google OAuth will **not work completely**. *However*, you must still have deployed OAuth working at these MVP steps:
    * User clicks "Sign up with Google"
    * User sees the Google consent screen
    * User returns back to the signup/login homepage (because we are unable to store cookies on deployment on the free Heroku tier at this time, so we are unable to go the `/dashboard` page as we properly should)

##  Documentation  
Write a description of the project in your README.md. 

## Submission Instructions
  * Continue working from previous labs 36-40
  * Work in a branch on your fork
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit the following two links
     * Your deployed Heroku frontend **that reflects the new changes for form validation** 
     * Your deployed Heroku backend
  * Submit a question, observation, and how long you spent on canvas  
  * Submit the Github URL to the backend repo you selected
  * Submit any necessary `.env` variables for BOTH your backend and front end projects so that TA's can have an easier time configuring their environments
