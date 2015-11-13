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

	getInitialState: function() {
		return {
			value: this.props.task.text
		};
	},

	handleChange: function(event) {
    this.setState({
      value: event.target.value
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

				<input id="checkit" type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked} />
					<label htmlFor="checkit" className="note"><strong>{this.props.task.username}</strong>: <input className="note" type="text" value={this.state.value} onChange={this.handleChange} name="todoItem" />
					</label>

				<button className="delete" onClick={this.deleteThisTask}>
					<i className="fa fa-trash-o fa-2x"></i>
				</button>

			</li>
		);
	}
});