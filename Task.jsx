Task = React.createClass({
	propTypes: {
		task: React.PropTypes.object.isRequired
	},

	toggleChecked() {
		// toggles todos between checked and unchecked
		Tasks.update(this.props.task._id, {
			$set: {checked: ! this.props.task.checked}
		});
	},

	deleteThisTask() {
		// deletes todos from the list according to its unique id
		Tasks.remove(this.props.task._id);
	},

	// gets a description of the HTML that this component should display
	render() {

		const taskClassName = this.props.task.checked ? "checked" : "";

		return (
			// individual todos
			<li className={taskClassName}>
				<button className="delete" onClick={this.deleteThisTask}>
					&times;
				</button>

				<input type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked} />

				<span className="text">{this.props.task.text}</span>
			</li>
		);
	}
});