 ## Testing (don't worry about this today)
* These testing requirements are not due until the last day of this rolling lab. TA's will *not* take away points for this specific lab if you don't have Cypress tests ready. **However, it is strongly recommended you still write your tests today**. 
* Use Cypress to test the following scenario:
    * A user travels to the homepage at `/`
    * A user clicks `Sign up` on your nav menu to travel to `/signup`
    * A user fills out a username, email, and password (and any other required properties for your account model) and submits the form
    * The `Dashboard` page properly appears indicating the user has been authenticated
    * User travels back to `/login`
    * User enters their username and password to authorize themselves into the app
    * The `Dashboard` page properly appears indicating the user has been authorized
 * You must stub your responses and set an `isStubbed` boolean variable in your test. Submit your tests with this boolean set to true so that TA's do not have to make requests to a real server to run your Cypress tests
 
##  Documentation  
Write a description of the project in your README.md

## Submission Instructions
  * Work in a branch on your fork
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  * Submit the Github URL to the backend repo you selected
  * Submit any necessary `.env` variables for BOTH your backend and front end projects so that TA's can have an easier time configuring their environments
