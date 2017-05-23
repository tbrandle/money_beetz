require('../styles/styles.css');
import YoutubeFetch from './youtube.js'

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
        Money Beetz!!
        <YoutubeFetch />
      </div>
    )
  }
});

ReactDOM.render(<Entry />, document.getElementById('content'));
