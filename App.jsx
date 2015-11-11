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
		console.log(event);
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
				<div className="container">
					<div className="footer-container">
						<AccountsUIWrapper />
					</div>
					<header className="shadow">
							<h4>Buzzybee <img src="bee-icon.png"></img></h4>
							<h5>Simple mobile note maker.</h5>

							{ this.data.currentUser ?
								<form className="new-task" onSubmit={this.handleSubmit} >
									<input type="text" id="note" ref="textInput" placeholder="Get busy typing ..." />
									<label htmlFor="note" ></label>
								</form> : ''
							}

							<div className="hide-tasks">
								<input id="check-button" type="checkbox" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted} />
								<label htmlFor="check-button" className="hide-completed">
									Hide Completed Notes
								</label>
								<span className="new badge">{this.data.incompleteCount} New</span>
							</div>

					</header>

					<ul>
						{this.renderTasks()}
					</ul>

					<div className="footer-container"></div>

				</div>
			);
	}
});
