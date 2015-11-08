// This represents the entire mobile todo app component
App = React.createClass({
	// uses data from the grounded Meteor collection
	mixins: [ReactMeteorData],

	getInitialState() {
		return {
			hideCompleted: false
		}
	},

	// loads the tasks from the grounded Meteor collection
	getMeteorData(){
		let query = {};

		if (this.state.hideCompleted) {
			// $ne (Mongo operator) compares two values and returns true when the values are not equal
			query = {checked: {$ne: true}};
		}

		return {
			tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
			incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
			currentUser: Meteor.user() // can check if user is logged in
		};
	},

	renderTasks(){
		return this.data.tasks.map((task) => {
			return <Task key={task._id} task={task} />;
		});
	},

	handleSubmit(event) {
		event.preventDefault();

		var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

		// Inserts the todos into the grounded Meteor collection
		Tasks.insert({
			text: text,
			createdAt: new Date(), // JS timestamp
			owner: Meteor.userId(), // _id of the user logged in
			// username: Meteor.userId()
			username: Meteor.user().username // username of user logged in
		});

		// Clears form
		ReactDOM.findDOMNode(this.refs.textInput).value = "";
	},

	// hides checked tasks
	toggleHideCompleted() {
		this.setState({
			hideCompleted: ! this.state.hideCompleted
		});
	},

	// gets a description of the HTML that this component should display
	render(){
		return (
				// Structure of the HTML for todo list
				<div className="container col s12 m6">
					<div className="footer-container"></div>
					<header>
						<h4><i className="small material-icons list">list</i>Note Composer <span className="new badge">({this.data.incompleteCount})</span></h4	>
						<h5>Simple mobile note maker.</h5 >

						<div className="col s8 offset-s2">
							<input id="check-button" type="checkbox" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted} />
							<label htmlFor="check-button" className="hide-completed">
								Hide Completed Tasks
							</label>
						</div>

							<span><i className="tiny material-icons perm_identity">perm_identity</i></span>
							<AccountsUIWrapper />
							
						{ this.data.currentUser ?
							<form className="new-task" onSubmit={this.handleSubmit} >
								<input type="text" id="note" ref="textInput" placeholder="Type your note here ..." />
								<label htmlFor="note" ></label>
							</form> : ''
						}
					</header>

					<ul>
						{this.renderTasks()}
					</ul>

					<div className="footer-container"></div>
				</div>
			);
	}
});