var HelloWorld= React.createClass({
	render: function() {
		return (
			<h1>Hello,React!</h1>
		);
	}
});
ReactDOM.render(<HelloWorld></HelloWorld>,$('#demo')[0]);
