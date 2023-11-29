# TASK TRACKER WEB APPLICATION

This project was inspired and instructed by [Traversy Media](https://www.youtube.com/@TraversyMedia), for learning purpose. \
Credit video [React JS Crash Course](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=5752s)

## Table of content
[Technologies](#Technologies)

[Project Structure](#Project-Structure)

[Instruction](#Instruction)

[Getting Started with Create React App](#getting-started-with-create-react-app)
## Technologies
- JavaScript
- React
- HTML / CSS

## Project Structure

* [src/](.\src)
    * [components/](.\src\components)
        * [About.js](.\src\components\About.js)
        * [AddTask.js](.\src\components\AddTask.js)
        * [Button.js](.\src\components\Button.js)
        * [Footer.js](.\src\components\Footer.js)
        * [Header.js](.\src\components\Header.js)
        * [Task.js](.\src\components\Task.js)
        * [Tasks.js](.\src\components\Tasks.js)
    * [App.js](.\src\App.js)
    * [index.css](.\src\index.css)
    * [index.js](.\src\index.js)
    * [reportWebVitals.js](.\src\reportWebVitals.js)
* [db.json](.\db.json)


## Instruction
1. Open your terminal and clone the repository with the following command: 
```
git clone https://github.com/TinNguyen01600/Task-tracker
```
2. Install all the packages:
```
npm install
```
3. Start the application in your local machine:
```
npm start
```
4. Install json-server:
```
npm i json-server
```
5. In file package.json, "scripts", add
```
"server": "json-server --watch db.json --port 5000" 
```
6. Start mock API Json server:
```
npm run server
```
7. New file [db.json](.\db.json) is created. You can add/edit data in this file. These data can be accessed in http://localhost:5000/tasks
```
(
"tasks": [ 
	{
		"id": 1, 
		"text": "Doctors Appointment",       
		"day": "Feb 5th 2:30pm",
		"reminder": true
	},
	{...},
	{...}
])
```

** Or simply access the deployed version on Netlify (https://tin-nguyen-task-tracker.netlify.app/). Mock API Json server must also be installed and run.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
