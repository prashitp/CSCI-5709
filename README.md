# Tutorial 4

* *Date Created*: 15 FEB 2022
* *Last Modification Date*: 15 FEB 2022
* *Deployment URL*: <https://tutorial-4-5709.herokuapp.com/>
* *Git URL*: <https://git.cs.dal.ca/pppatel/prashit-patel-csci5709/-/tree/tutorial4> 

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
* Run 'git checkout tutorial4' to change branch.
* Run 'npm install' for installing dependencies.
* Run 'npm run build' to build the app.
* Run the app using 'npm start'.
* Open browser and run http://localhost:3000/ to run the app in the browser.

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

* [ReactJs](https://reactjs.org/) - The web framework used
* [Visual Studio Code](https://code.visualstudio.com/) - IDE used for development
* [Heroku](https://heroku.com/) - Used to deploy the app
## Sources Used

### Libraries Used

1. [react-router-dom](https://www.npmjs.com/package/react-router-dom)
2. [antd](https://www.npmjs.com/package/antd)
3. [react-icons](https://www.npmjs.com/package/react-icons)
4. [express](https://www.npmjs.com/package/express)
5. [axios](https://www.npmjs.com/package/axios)

### Design Components Used from libraries

1. [Layout](https://ant.design/components/layout/)
2. [Content](https://ant.design/components/layout/#components-layout-demo-top)
3. [Card](https://ant.design/components/card/)
4. [Row,Col](https://ant.design/components/grid/)
5. [Button](https://ant.design/components/button/)
6. [Input](https://ant.design/components/input/)
7. [message](https://ant.design/components/message/)
8. [Box Shadow](https://getcssscan.com/css-box-shadow-examples)
9. [Avatar](https://ant.design/components/avatar/)
10. [List](https://ant.design/components/list/)
### File Name - Profile.js
*Lines 34-35*

```
String(user.firstName.toLowerCase()).startsWith(e.target.value.toLowerCase()) ||
        String(user.lastName.toLowerCase()).startsWith(e.target.value.toLowerCase())

```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/50030338/combine-filter-and-startswith-to-filter-array) as shown below: 

```
p => String(p.year).startsWith('198')

```

- The code in [StackOverflow](https://stackoverflow.com/questions/50030338/combine-filter-and-startswith-to-filter-array) was implemented by Zohaib Ijaz
- [Zohaib Ijaz](https://stackoverflow.com/users/5567387/zohaib-ijaz)'s Code was used to combine filter and start with for strings stored in an array.
## Acknowledgments

* CSS Gradients - [w3schools](https://www.w3schools.com/css/css3_gradients.asp)
* React Documentation - [react.js](https://reactjs.org/docs/getting-started.html)
* Antd Documentation - [antd](https://ant.design/)
