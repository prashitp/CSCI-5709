# Tutorial 5

* *Date Created*: 8 MAR 2022
* *Last Modification Date*: 8 MAR 2022
* *Deployment URL*: <https://tutorial5-csci5709.herokuapp.com/>
    ### API Endpoints:
    * GET users - Type: GET, URL: <https://tutorial5-csci5709.herokuapp.com/users>
    * PUT user - Type: PUT, URL: <https://tutorial5-csci5709.herokuapp.com/update/:id>
    * POST user - Type: POST, URL: <https://tutorial5-csci5709.herokuapp.com/add>
    * GET user - Type: GET, URL: <https://tutorial5-csci5709.herokuapp.com/user/:id>

* *Git URL*: <https://git.cs.dal.ca/pppatel/prashit-patel-csci5709/-/tree/tutorial5> 

## Authors

* [Prashit Prakashbhai Patel - B00896717](pr718986@dal.ca)

## Getting Started

To have a local copy of this assignment up and running on your local machine, refer the sections below.
### Prerequisites

First you need to install the following software / libraries / plug-ins

* Node.js
* npm

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

Installation of Node.js and npm can be found at https://nodejs.org/en/

Run the following commands to check successful installation:

* node -v
* npm -v

To run this assignment on local follow the below steps:

* Run 'git clone https://git.cs.dal.ca/pppatel/prashit-patel-csci5709.git' for cloning files of this repository to local machine.
* Run 'git checkout tutorial5' to change branch.
* Run 'npm install' for installing dependencies.
* Run the app using 'npm start'.
* Open postman and start using the endpoints mentioned above on http://localhost:8080/.

## Deployment

This assignment is deployed on Heroku server. Follow below steps for deployment:

1. Go to https://www.heroku.com/ and sign in with your account.
2. Create a new app and give it a name.
3. In your terminal, run 'heroku login'.
4. After successful login, run 'heroku git:clone -a {APP_NAME}$ {APP_NAME}' where APP_NAME is the name provided in step 2.
5. Run 'git add .' to add all the files.
6. Run  'git commit -am MESSAGE' where MESSAGE is any string which can be used to identify the commit.
7. Run 'git push heroku master' to push the code.
8. Heroku will build the code after completion of push operation.
9. Click on 'Open App' from the heroku website window to view the deployed app.

## Built With

* [Nodejs](https://nodejs.org/en/docs/) - The backend framework used
* [Visual Studio Code](https://code.visualstudio.com/) - IDE used for development
* [Heroku](https://heroku.com/) - Used to deploy the app

## Sources Used

### Libraries Used

1. [express](https://www.npmjs.com/package/express)
2. [uuid](https://www.npmjs.com/package/uuid)
3. [http](https://www.npmjs.com/package/http)

### File Name - Procfile
*Line 1*

```
web: node index.js

```

The code above was created by adapting the code in [medium](https://medium.com/geekculture/deploy-node-applications-on-heroku-a89ed51e0a34) as shown below: 

```
web: node index.js

```

- The code in [medium](https://medium.com/geekculture/deploy-node-applications-on-heroku-a89ed51e0a34) was implemented by Hitesh Mandav.
- [Hitesh Mandav](https://medium.com/@hitesh-mandav)'s Code was used to add procfile used to deploy nodejs application to heroku.

## Acknowledgments

* Nodejs Documentation - [node.js](https://nodejs.org/en/docs/)
* Medium - [medium](https://medium.com/geekculture/deploy-node-applications-on-heroku-a89ed51e0a34)