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
			currentUser: Meteor.user()
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
				<div className="container">
					<header>
						<h1>Todo List ({this.data.incompleteCount})</h1>

						<label className="hide-completed">
							<input type="checkbox" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted} />
							Hide Completed Tasks
						</label>

						<AccountsUIWrapper />
						// only show when logged in
						{ this.data.currentUser ?
							<form className="new-task" onSubmit={this.handleSubmit} >
								<input type="text" ref="textInput" placeholder="Type your todo here ..." />
							</form> : ''
						}
					</header>

					<ul>
						{this.renderTasks()}
					</ul>
				</div>
			);
	}
});