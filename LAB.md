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
  * Submit a link to your pull request on canvas: 
  * Submit a question: do you typically make components that inherit from react.component, or as constructor functions?
  * observation: making react apps is easy when you're components arent nested 4 deep :-P
  * and how long you spent: ~4 hours
  * Submit the Github URL to the backend repo you selected: https://github.com/ashtonkellis/RemindR
  * Backend ENV variables:
  ```
    NODE_ENV=development
    PORT=3000
    MONGODB_URI=mongodb://localhost/yourOwnDBNameHere
    SECRET_KEY=helloWorldkdsjflad
    TWILIO_ACCOUNT_SID=ACa95d84e8c74b9854d72577673a672dc0
    TWILIO_AUTH_TOKEN=ad5276912d2a085c1dfd2f052524d9d8
    TWILIO_NUMBER=+14159414643
    CORS_ORIGINS=http://localhost
  ```
  * Frontend ENV variables:
  ```
    API_URL=http://localhost:3000/api
  ```
