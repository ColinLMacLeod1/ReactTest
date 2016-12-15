var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');


function Board(props) {
	return (
			<div> <h2> {props.styleTrack} </h2> <br />
				<button className="btn" style={props.style[0]} onClick={() => props.Click(0)}></button>
				<button className="btn" style={props.style[1]} onClick={() => props.Click(1)}></button>
				<button className="btn" style={props.style[2]} onClick={() => props.Click(2)}></button>
				<button className="btn" style={props.style[3]} onClick={() => props.Click(3)}></button>
				<br />
				<button className="btn" style={props.style[4]} onClick={() => props.Click(4)}></button>
				<button className="btn" style={props.style[5]} onClick={() => props.Click(5)}></button>
				<button className="btn" style={props.style[6]} onClick={() => props.Click(6)}></button>
				<button className="btn" style={props.style[7]} onClick={() => props.Click(7)}></button>
				<br />
				<button className="btn" style={props.style[8]} onClick={() => props.Click(8)}></button>
				<button className="btn" style={props.style[9]} onClick={() => props.Click(9)}></button>
				<button className="btn" style={props.style[10]} onClick={() => props.Click(10)}></button>
				<button className="btn" style={props.style[11]} onClick={() => props.Click(11)}></button>
				<br />
				<button className="btn" style={props.style[12]} onClick={() => props.Click(12)}></button>
				<button className="btn" style={props.style[13]} onClick={() => props.Click(13)}></button>
				<button className="btn" style={props.style[14]} onClick={() => props.Click(14)}></button>
				<button className="btn" style={props.style[15]} onClick={() => props.Click(15)}></button>
			 </div>

		)
};


module.exports = Board;