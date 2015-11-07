// This represents the entire mobile todo app component
App = React.createClass({
	// uses data from the collection
	mixins: [ReactMeteorData],
	// loads the tasks from the collection
	getMeteorData(){
		return {
			tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
		}
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
			createdAt: new Date() // JS timestamp
		});

		// Clears form
		ReactDOM.findDOMNode(this.refs.textInput).value = "";
	},

	// gets a description of the HTML that this component should display
	render(){
		return (
				// Structure of the HTML for todo list
				<div className="container">
					<header>
						<h1>Todo List</h1>
						<form className="new-task" onSubmit={this.handleSubmit} >
							<input type="text" ref="textInput" placeholder="Type your todo here ..." />
						</form>
					</header>

					<ul>
						{this.renderTasks()}
					</ul>
				</div>
			);
	}
});