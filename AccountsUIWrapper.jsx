AccountsUIWrapper = React.createClass({
	componentDidMount() {
		// Blaze renders login buttons
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));
	},

	componentWillUnmount() {
		Blaze.remove(this.view);
	},

	render() {
		// placeholder container that will be filled in with login components
		return <span ref="container" />
	}
});