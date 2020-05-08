$(document).ready(function() {



//  SUPERTOPIC PAGE
	//Sample REACT demo
	// This component renders an individual comment.
var UFIComment = React.createClass({
  getInitialState: function() {
    return {
      liked: false
    };
  },

  onLinkClick: function(evt) {
    evt.preventDefault();
    this.setState({
      liked: !this.state.liked
    });
  },

  render: function() {
    // PART TWO: Add a Like link to `UFIComment` that can be toggled.
    // NOTE: Consider taking the toggle state as a prop...
    return (
      <li>
        {this.props.text}
        {' '}
        <a href='#' onClick={this.onLinkClick}>
          {this.state.liked ? 'Unlike' : 'Like'}
        </a>
      </li>
    );
  }
});

// This component renders a list of comments.
var UFIComments = React.createClass({
  renderItem: function(item) {
    return <UFIComment key={item.id} text={item.text} />;
  },

  render: function() {
    // PART ONE: Set `commentItems` here to be an array of <UFIComment>s reflecting
    // the props.
    // HINT: You can use `this.renderItem` to fill the array.
    var commentItems = [];
    for (var ii = 0, len = this.props.comments.length; ii < len; ii++) {
      commentItems.push(this.renderItem(this.props.comments[ii]));
    }

    // OR
    // var commentItems = this.props.comments.map(this.renderItem);
    // Note that you don't need to bind this.renderItem because
    // of React's auto-binding.
    // http://facebook.github.io/react/blog/2013/07/02/react-v0-4-autobind-by-default.html

    return (
      <ul className="ufiComment">
        {commentItems}
      </ul>
    );
  }
});

var UFI = React.createClass({
  getInitialState: function() {
    return {
      comments: [
        {id: 1, text: 'Comment One', type: 'Page'},
        {id: 2, text: 'Comment Two', type: 'Term'},
        {id: 3, text: 'Comment Three', type: 'Page'}
      ],
      inputValue: ''
    };
  },

  onInputChange: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  },

  onSubmit: function(evt) {
    evt.preventDefault();
    this.setState({
      comments: this.state.comments.concat([{
        id: this.state.comments.length + 1,
        text: this.state.inputValue
      }]),
      inputValue: ''
    });
  },

  // PART THREE: Add a form that allows users to add comments!
  render: function() {
    return (<div>
      <UFIComments comments={this.state.comments} />
      <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onInputChange} value={this.state.inputValue} />
          <button>Add Comment!</button>
      </form>
    </div>);
  }
});

React.render(<UFI />, document.getElementById('main'));

});