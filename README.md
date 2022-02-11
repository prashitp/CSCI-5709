# Assignment 1

* Project - Skip the bins : Recyclable waste management system
The project gives a common platform for the vendors who recycle waste and the users who wants to submit their waste to those vendors. Users will schedule a waste pickup from this website, track the pickup and will receive rewards based on the amount of waste given. Users can see history of their submissions. Vendors can schedule pickups and award rewards to users. Both users and vendors can see staticstics of the waste submissions.

* *Date Created*: 10 FEB 2022
* *Last Modification Date*: 10 FEB 2022
* *Deployment URL*: <https://assignment1-skipthebins.herokuapp.com/>
* *Git URL*: <https://git.cs.dal.ca/pppatel/prashit-patel-csci5709/-/tree/assignment1> 

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
* Run 'git checkout assignment1' to change branch.
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
* [W3C Validator](https://validator.w3.org/) - Used to validate application with W3C standards.

## Design Choices

* Browser Logo - The logo of the app shows earth surrounded by recycling arrows which indicates that everything on earth can be made reusable.
* Website logo & App Name - The name of the project is skip the bins which means the reusable waste should be skipped from throwing in the bins so it can be recycled and reused to save resources and keep the environment clean.
* Design - Background gradient is titanium (silver shade color) which is considered as a symbolic color of rubbish. Background color of the content is kept white to increase visibility of the content rendered on the screen.
* Typography - Normal fonts are used to increase the visibility of the user.
* Font color - Green and Blue are used as primary and secondary colors which are symbolic colors of cleaner and greener environment (green for vegetation and blue for water).
## Sources Used

### Libraries Used

1. [react-router-dom](https://www.npmjs.com/package/react-router-dom)
2. [antd](https://www.npmjs.com/package/antd)
3. [moment](https://www.npmjs.com/package/moment)
4. [@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)
5. [react-icons](https://www.npmjs.com/package/react-icons)
6. [express](https://www.npmjs.com/package/express)

### Design Components Used from libraries

1. [Layout](https://ant.design/components/layout/)
2. [Header, Footer, Content](https://ant.design/components/layout/#components-layout-demo-top)
3. [Image](https://ant.design/components/image/)
4. [Menu](https://ant.design/components/menu/)
5. [Card](https://ant.design/components/card/)
6. [Row,Col](https://ant.design/components/grid/)
7. [Statistic](https://ant.design/components/statistic/)
8. [Button](https://ant.design/components/button/)
9. [Space](https://ant.design/components/space/)
10. [InputNumber](https://ant.design/components/input-number/)
11. [Calendar](https://ant.design/components/calendar/)
12. [message](https://ant.design/components/message/)
13. [Checkbox](https://ant.design/components/checkbox/)
14. [Icons](https://ant.design/components/icon/)
15. [Box Shadow](https://getcssscan.com/css-box-shadow-examples)

### Images Reference

1. Browser Tab Logo, Website Logo - Created using https://www.adobe.com/express/
2. Background Gradient - https://uigradients.com/#Titanium
3. Schedule Card Image - https://www.google.com/search?q=schedule+appointment&sxsrf=APq-WBsmPBprRC0xg405tsRggg9qBvPqkA:1643910447659&source=lnms&tbm=isch&sa=X&ved=2ahUKEwicoZnSi-T1AhVSTt8KHe27DG8Q_AUoAXoECAEQAw&biw=1309&bih=695&dpr=2.2#imgrc=Maa9Z6tlnxu5vM
4. View Card Image - https://www.google.com/search?sa=G&hl=en&tbs=simg:CAQS8gEJZMowGzY_1_1ysa5gELELCMpwgaOwo5CAQSFNoHwg7KFt4tiiqwHvA_1-Q-0FKoaGhvf0TRWV-sIK_1Fr9DOyjAksPcr1lNtI0yszXk0gBTAEDAsQjq7-CBoKCggIARIEtiWP-wwLEJ3twQkahQEKGwoIZG9jdW1lbnTapYj2AwsKCS9tLzAxNWJ2MwoYCgVldmVudNqliPYDCwoJL20vMDgxcGtqChcKBXBhcGVy2qWI9gMKCggvbS8wNjQxawoXCgVmcnVpdNqliPYDCgoIL20vMDJ4d2IKGgoHcmVjZWlwdNqliPYDCwoJL20vMDRnY2w5DA&sxsrf=APq-WBtOaLF3nM6G92m5VSaJb-HWPHFx6Q:1644543174199&q=fssai+number+on+bill&tbm=isch&ved=2ahUKEwiZtdzdwPb1AhXjkIkEHdijDDQQwg4oAHoECAEQMw&biw=1309&bih=746&dpr=2.2#imgrc=4HGthS2AGXh4DM
5. Edit Card Image - https://www.google.com/search?sa=G&hl=en&tbs=simg:CAQShwIJTJkiNGKrEdwa-wELELCMpwgaOQo3CAQSE-YQ2gf-B4oqSu0unQHKFu0osBoaGuNHG7uRjm8Xe0gkr52WZm19vF72xkzmbMoIIAUwBAwLEI6u_1ggaCgoICAESBMhDsAYMCxCd7cEJGpwBCigKFHN0YXRpc3RpY2FsIGdyYXBoaWNz2qWI9gMMCgovbS8wM3FoazNtChsKCGRvY3VtZW502qWI9gMLCgkvbS8wMTVidjMKFwoEaGFyZNqliPYDCwoJL2EvYjV5NWcyCh0KCmhvcml6b250YWzapYj2AwsKCS9hLzJtcXZ6YwobCgh2ZXJ0aWNhbNqliPYDCwoJL2EvNGhoM3AwDA&sxsrf=APq-WBvklOebKI1WE1pAODRpfE8iDGgROw:1644543212613&q=calendar&tbm=isch&ved=2ahUKEwjAl4XwwPb1AhWvl4kEHc9VBhgQwg4oAHoECAIQMw&biw=1309&bih=746&dpr=2.2#imgrc=dYiaYlOlxs97gM
6. Cancel Card Image - https://www.google.com/search?q=schedule+appointment&sxsrf=APq-WBsmPBprRC0xg405tsRggg9qBvPqkA:1643910447659&source=lnms&tbm=isch&sa=X&ved=2ahUKEwicoZnSi-T1AhVSTt8KHe27DG8Q_AUoAXoECAEQAw&biw=1309&bih=695&dpr=2.2#imgrc=Maa9Z6tlnxu5vM

Image Editing Tools Used:

1. [Adobe Express](https://www.adobe.com/express/)
2. [Remove bg](https://www.remove.bg/)
### File Name - SchedulePickup.js
*Lines 157*

```
precision={1}

```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/58943805/how-to-limit-the-input-number-to-max-of-two-decimals-with-ant-design) as shown below: 

```
precision={2}

```

- The code in [StackOverflow](https://stackoverflow.com/questions/58943805/how-to-limit-the-input-number-to-max-of-two-decimals-with-ant-design) was implemented by champion-runner
- [champion-runner](https://stackoverflow.com/users/11422830/champion-runner)'s Code was used because to add floating numbers to input component.

*Lines 67-69*

```
defaultValue={moment().add(1, "day").endOf("day")}
disabledDate={(current) =>
    current && current <= moment().endOf("day")
}

```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/35441820/tomorrow-today-and-yesterday-with-momentjs) as shown below: 

```
const today = moment().endOf('day')
const tomorrow = moment().add(1, 'day').endOf('day')

```

- The code in [[StackOverflow](https://stackoverflow.com/questions/35441820/tomorrow-today-and-yesterday-with-momentjs)  was implemented by guillaumepotier
- [guillaumepotier](https://stackoverflow.com/users/404581/guillaumepotier)'s Code was used because add default value and disable previous values in calendar.

### File Name - Navigation.js
*Lines 56*

```
style={{ marginLeft: "auto" }}

```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/questions/50882990/how-to-right-align-menu-items-in-ant-design) as shown below: 

```
style={{ marginLeft: 'auto' }}

```

- The code in [StackOverflow](https://stackoverflow.com/questions/50882990/how-to-right-align-menu-items-in-ant-design) was implemented by Frazze
- [Frazze](https://stackoverflow.com/users/2111566/frazze)'s Code was used because to align user menu option to right in navigation bar.

## Acknowledgments

* CSS Gradients - [w3schools](https://www.w3schools.com/css/css3_gradients.asp)
* React Documentation - [react.js](https://reactjs.org/docs/getting-started.html)
* Antd Documentation - [antd](https://ant.design/)