// Define a grounded Meteor collection to hold todos
Tasks = new Ground.Collection('tasks');

if (Meteor.isClient){
	Meteor.startup(function(){
		ReactDOM.render(<App />, document.getElementById("render-target"));
	});
}