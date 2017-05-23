require('../styles/styles.css');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
        Money Beetz!!
      </div>
    )
  }
});

ReactDOM.render(<Entry />, document.getElementById('content'));
