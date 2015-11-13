## BUZZYBEE -- The Simple ToDo Mobile Application

BUZZYBEE [The Simple ToDo Mobile Application](http://mobile-todos-react.meteor.com) is a mobile web app that allows you create, edit, and view short notes -- like to-do lists.

### Technologies Used

BUZZYBEE was built using:
+ HTML & CSS
+ JavaScript (JSX) -- an inline markup that looks like HTML and gets transformed to JavaScript
```javascript
<button className="delete" onClick={this.deleteThisTask}>
	<i className="fa fa-trash-o fa-2x"></i>
</button>
```
+ Meteor -- a JavaScript web application *framework*
+ ReactJS -- a JavaScript *library* for building user interfaces
+ GroundDB -- saves into localstorage

### Mobile Mockup (Sketch)
**************************
![](https://github.com/celestelayne/mobile-todos-react/blob/master/mobile-todos-mockup.png "Simple ToDo Mobile App")

### Mobile GIF
**************
![](https://github.com/celestelayne/mobile-todos-react/blob/master/mobile-todos-react.gif "Simple ToDo Mobile App")

### Features

+ Notes are stored using browser local storage
+ Buzzybee is usable on a standard mobile browser
+ Users can create notes under their own account

### Installation & Usage
#### Setup
First, clone down the repository and **cd** into the project folder:
```
git clone https://github.com/celestelayne/mobile-todos-react.git && cd mobile-todos-react
```
+ Start the server by typing:
```
meteor
```
+ See the app up and running on [localhost:3000](http://localhost:3000/)
+ Alternatively, you can see the app live  [here](http://mobile-todos-react.meteor.com) on your mobile phone