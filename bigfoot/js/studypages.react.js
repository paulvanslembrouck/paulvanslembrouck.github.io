/**
 * @jsx React.DOM
 */




var StudyPage = React.createClass({
	render: function() {
		return (
			<div>IMPLEMENT ME</div>
		);
	}
});

	
var OverviewPage = React.createClass({
	render: function() {
		return (
			<div className="page">
				<img src='../img/analyze.png' />
			</div>
		);
	}
});


var InteractionsPage = React.createClass({
	render: function() {
		return (
			<div className="page">
				<div>Interactions Page</div>
			</div>
		);
	}
});


React.render(<OverviewPage />, document.getElementById('study-content'));
