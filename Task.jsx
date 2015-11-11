Task = React.createClass({
	propTypes: {
		task: React.PropTypes.object.isRequired
	},

	toggleChecked(event) {
		console.log(event);
		// toggles todos between checked and unchecked
		Tasks.update(this.props.task._id, {
			$set: {checked: !this.props.task.checked}
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
					<i className="fa fa-trash-o fa-2x"></i>
				</button>

				<input id="checkit" type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked} />

				<label htmlFor="checkit" className="note">
						<strong>{this.props.task.username}</strong>: {this.props.task.text}
				</label>
			</li>
		);
	}
});