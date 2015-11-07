// Define a grounded Meteor collection to hold todos
Tasks = new Ground.Collection('tasks');

if (Meteor.isClient){

	Accounts.ui.config({
		passwordSignupFields: "USERNAME_ONLY"
	});

	Meteor.startup(function(){
		// renders div in body on page ready
		ReactDOM.render(<App />, document.getElementById("render-target"));
	});
}