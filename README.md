# PWA-Budget-Tracker
![](https://img.shields.io/badge/Created%20by-Vincent%20Shepard-Green?style=for-the-badge)  
![](https://img.shields.io/badge/Database-MongoDB-yellow?style=flat-square&logo=mongoDB)  ![](https://img.shields.io/badge/npm%20package-express-orange?style=flat-square&logo=npm) ![](https://img.shields.io/badge/npm%20package-mongoose-cyan?style=flat-square&logo=npm) 
 ## Table of Contents:  
[1. Description](#Description)

[2. User Story](#User-Story)  
[3. Acceptance Criteria](#Acceptance-Criteria)  
[4. Deployed Application](#Deployed-Application)  
[5. Installation](#Installation)  
[6. Screenshot](#Screenshot)  
[7. License Details](#License-Details)  
[8. Submission](#Submission)   
[9. Questions](#Questions)  
## Description:
A Full-Stack mobile-first progressive web application that allows users to track their budgets by adding expenses and income. The application also allows users to see a visual representation of their budget via a graph. They are able to add a transaction with or without connection. Transactions are stored in the indexedDB and transferred to the server. The server then stores the transactions in a MongoDB database when the user returns online. Utilizes IndexedDB(for offline support) MongoDB, Express, Service Workers, and Node.js.

## User Story:
- AS AN avid traveler
- I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
- SO THAT my account balance is accurate when I am traveling 

## Acceptance Criteria:

- GIVEN a budget tracker without an internet connection
- WHEN the user inputs an expense or deposit
- THEN they will receive a notification that they have added an expense or deposit
- WHEN the user reestablishes an internet connection
- THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated


## Deployed Application:
[Heroku Deployment](https://pwa-budget-tracker-vshepard879.herokuapp.com/)  


## Installation:
This repo is not to be deployed, if you wanted to, you could by doing the following:  
1. Download the repo files from the link below
2. You must have mongoDB installed
3. Run the following at the command line
```
    - npm init -y
    - npm install express
    - npm install mongoose
    
```
4. Start the server
```
    $ npm start
```
5. Open Insomnia Core to test API routes

## Screenshot:  
![ScreenShot](./public/images/screenshot%20(3).png)
## License Details: 
 This project is under no license.  

## Submission:
 [Github repository](https://github.com/Vshepard879/PWA-Budget-Tracker)