var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');


function Board(props) {
	return (
			<div>
				<div> 
					<h1 style={styles.fontG}> Click the boxes! </h1> 
					<h2 style={styles.fontG}> {props.styleTrack} </h2> <br />
					<button className="btn" style={props.style[0][0]} onClick={() => props.Click(0)}>{props.styleTrack[0][0]}</button>
					<button className="btn" style={props.style[0][1]} onClick={() => props.Click(1)}>{props.styleTrack[0][1]}</button>
					<button className="btn" style={props.style[0][2]} onClick={() => props.Click(2)}>{props.styleTrack[0][2]}</button>
					<button className="btn" style={props.style[0][3]} onClick={() => props.Click(3)}>{props.styleTrack[0][3]}</button>
					<br />
					<button className="btn" style={props.style[1][0]} onClick={() => props.Click(4)}>{props.styleTrack[1][0]}</button>
					<button className="btn" style={props.style[1][1]} onClick={() => props.Click(5)}>{props.styleTrack[1][1]}</button>
					<button className="btn" style={props.style[1][2]} onClick={() => props.Click(6)}>{props.styleTrack[1][2]}</button>
					<button className="btn" style={props.style[1][3]} onClick={() => props.Click(7)}>{props.styleTrack[1][3]}</button>
					<br />
					<button className="btn" style={props.style[2][0]} onClick={() => props.Click(8)}>{props.styleTrack[2][0]}</button>
					<button className="btn" style={props.style[2][1]} onClick={() => props.Click(9)}>{props.styleTrack[2][1]}</button>
					<button className="btn" style={props.style[2][2]} onClick={() => props.Click(10)}>{props.styleTrack[2][2]}</button>
					<button className="btn" style={props.style[2][3]} onClick={() => props.Click(11)}>{props.styleTrack[2][3]}</button>
					<br />
					<button className="btn" style={props.style[3][0]} onClick={() => props.Click(12)}>{props.styleTrack[3][0]}</button>
					<button className="btn" style={props.style[3][1]} onClick={() => props.Click(13)}>{props.styleTrack[3][1]}</button>
					<button className="btn" style={props.style[3][2]} onClick={() => props.Click(14)}>{props.styleTrack[3][2]}</button>
					<button className="btn" style={props.style[3][3]} onClick={() => props.Click(15)}>{props.styleTrack[3][3]}</button>
				 </div>
				 <div>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(-1)}>Left</button>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(-4)}>Up</button>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(4)}>Down</button>
				 	<button className="btn" style={styles.arrow} onClick={() => props.Click(1)}>Right</button>
				 </div>
			</div>
		)
};


module.exports = Board;