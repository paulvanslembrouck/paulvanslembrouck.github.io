/**
 * @jsx React.DOM
 */

var PAGE = "Overview";

var ActivePageReact = <OverviewPage />; 

/* function SelectPage(PAGE)
LABEL:switch(PAGE) {
    case "Overview":
         ActivePageReact = <OverviewPage />; 
        break;
    case "Interactions":
         ActivePageReact = <InteractionsPage />;
        break;
    default:
        console.log("OOPS");
}; 

var RENDERER = {
	'Overview': OverviewPage,
}; */



var NavButton = React.createClass({
	getInitialState: function() {
    	return {name: 'Overview'};
  	},
  	handleClick: function(event) {
		this.setState({name: this.props.name});
		PAGE = this.props.name + 'Page';
		this.props.onNewActive(PAGE);
	},
	render: function() {
		return (
      		<a onClick={this.handleClick} href="#">{this.props.name}</a>

		);
	}    
});


var StudyNav = React.createClass({
	render: function() {
		return (
			<div id="side-nav" role="navigation">
				<ul className="nav nav-pills nav-stacked">
					<li role="presentation" className="active" >
						<NavButton name='Overview' onNewActive={this.props.onNewActive} />
					</li>
		  			<li role="presentation">
		  				<NavButton name='Interactions'  onNewActive={this.props.onNewActive} />
		  			</li>
		  			<li role="presentation">
		  				<NavButton name='Conversation'  onNewActive={this.props.onNewActive} />
		  			<ul className="nav nav-pills nav-stacked small-pills">
		  				<li role="presentation"><NavButton name='Highlights'  onNewActive={this.props.onNewActive} /></li>
		  				<li role="presentation"><NavButton name='Keywords'  onNewActive={this.props.onNewActive} /></li>
		  			</ul>
		  			</li>
				</ul>
			</div>
		);
	}
});

var pagename = 'highlights' + '/>';

var App = React.createClass({
	getInitialState: function() {
		return {active: 'Overview'};
	},
	onNewActive: function(newActive) { this.setState({active: newActive}); },
	render: function() {
		return (
			<div>
				<StudyNav name={this.state.active} onNewActive={this.onNewActive} />
				<div class="container main">
					<div id="content">
						<StudyPage name={this.state.active} />
					</div>
				</div>
			</div>
		)
	}
})




React.render(<App />, document.getElementById('app'));

