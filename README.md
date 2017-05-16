# Team 1 Enque
[![Code Climate](https://codeclimate.com/github/kkuo42/1-Fubar-App/badges/gpa.svg)](https://codeclimate.com/github/kkuo42/1-Fubar-App)
[![Test Coverage](https://codeclimate.com/github/kkuo42/1-Fubar-App/badges/coverage.svg)](https://codeclimate.com/github/kkuo42/1-Fubar-App/coverage)
[![Issue Count](https://codeclimate.com/github/kkuo42/1-Fubar-App/badges/issue_count.svg)](https://codeclimate.com/github/kkuo42/1-Fubar-App)

First Run
----------------------------
1. Setup Account with [mLab](https://mlab.com/)
2. Copy mongoDB access point into app.js:

        $ var mongoURI = process.env.MONGOLAB_URI || 'YOUR MONGODB CONNECTION ON mLAB';
        
2. Install [Node.js](http://nodejs.org/download/)
3. Navigate to the root directory
4. Install npm dependencies:

        $ npm install
        $ npm install --global gulp

6. Use ``gulp`` to run the application
7. Navigate your browser to [http://localhost:4000](http://localhost:4000/)

Push to testing environment
----------------------------
1. Simply push your experimental changes to the ``staging`` branch.
2. Changes may be viewed here: https://cse112-1-staging.herokuapp.com/

Live website
----------------------------
The live app can be found here: https://cse112-1.herokuapp.com/
