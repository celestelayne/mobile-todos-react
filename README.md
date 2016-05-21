## BUZZYBEE -- The Simple Mobile Note Maker

BUZZYBEE [The Simple Mobile Note Maker](secure-everglades-76078.herokuapp.com) is a mobile web app that allows you create, edit, and view short notes -- like to-do lists. **For now you must log in to create a note, create your own or use** *account name: maria, password: password*

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
+ *Note: this app has been transferred from Meteor to Heroku / MLab*
+ ReactJS -- a JavaScript *library* for building user interfaces
+ GroundDB -- saves into localstorage

### Mobile Mockup (Sketch)
**************************
![](https://github.com/celestelayne/mobile-todos-react/blob/master/mobile-todos-mockup.png "The Simple Mobile Note Maker")

### Mobile GIF
**************
![](https://github.com/celestelayne/mobile-todos-react/blob/master/mobile-todos-react.gif "The Simple Mobile Note Maker")

### Features

+ Create your own user account with password or login *(dummy account name: maria, password: password)*
+ Create notes under your own account name
+ Notes are stored using browser local storage

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
+ Alternatively, you can see the app live [here](http://mobile-todos-react.meteor.com) on your mobile phone