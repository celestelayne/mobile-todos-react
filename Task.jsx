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

	editThisTask(){
		Tasks.edit(this.props.task._id, {
			'keyup[name=todoItem]': function(event){
				var todoItem = $(event.target).val();
			}
		});
	},

	// gets a description of the HTML that this component should display
	render() {

		const taskClassName = this.props.task.checked ? "checked" : "";

		return (
			// individual todos
			<li className={taskClassName}>

				<button className="delete" onClick={this.deleteThisTask}>
					<i className="small material-icons delete">delete</i>
				</button>

				<input id="checkit" type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked} />

				<label htmlFor="checkit" className="note">

						<span><strong>{this.props.task.username}</strong>: <input type="text" value={this.props.task.text} name="todoItem" />
						</span>
				</label>
			</li>
		);
	}
});