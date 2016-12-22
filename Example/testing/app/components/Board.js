var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');


function Board(props) {
	return (
			<div>
					<h1 style={styles.fontG}> Click the boxes! </h1> 
					<h2 style={styles.fontG}> {props.styleTrack} </h2> <br />
					<button className="btn" style={props.style[0][0]} onClick={() => props.Click(0)}></button>
					<button className="btn" style={props.style[0][1]} onClick={() => props.Click(1)}></button>
					<button className="btn" style={props.style[0][2]} onClick={() => props.Click(2)}></button>
					<button className="btn" style={props.style[0][3]} onClick={() => props.Click(3)}></button>
			</div>
		)
};


module.exports = Board;