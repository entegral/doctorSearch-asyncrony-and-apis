  #### FindMD App

  #### By Robert Bruce

  ## Description

  This is website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

  ## Setup/Installation Requirements

  * In the command line, clone this repository
  ```
  $ git clone <url-of-this-repo>
  ```

  * Add your .env file to root of directory
  ```
  $ touch .env
  $ "API_KEY=<your-api-key>" >> .env
  ```

  * To open the application in Chrome, use command
  ```
  $ npm install
  $ npm run start
  ```


  ## Learning Objectives

  [x] - A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.

  [x] - A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.

  [x] - If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).

  [x] - If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

  [x] - If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

  [x] - Does the application correctly use webpack?

  [x] - Did you follow all setup instructions, including storing your API key?

  [x] - Does the app separate user interface and business logic functionalities into different JavaScript files?

  [x] - Does the application correctly make an API call?

  [x] - Does the application correctly parse data from the API response?

  [x] - Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?

  [x] - Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)

  [x] - Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?

  [x] - Is the app in a presentable, portfolio-quality state?

  [x] - Is required functionality in place by the Friday deadline?

  ## Known Bugs

  * There are no known bugs at this time.

  ## Support and contact details

  If you have any questions or issues, please contact e2robby@gmail.com. Or, feel free to contribute to the code.

  ## Technologies Used

  Javascript, Node, npm, Jasmine, Karma, HTML, CSS, Git, Bootstrap, jQuery, webpack, Popper, ESLint, Uglify, and Style-Loader.

  ### License

  This software is licensed under the MIT license.

  Copyright (c) 2019 **Robert Bruce**
