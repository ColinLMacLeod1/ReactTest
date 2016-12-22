var React = require('react');
var Board = require('../components/Board');
var styles = require('../styles')


var BoardContainer = React.createClass({
	getInitialState() {
		var x = new Array();
		for(i=5;i<1;i++){
			console.log('step1');
			x[i] = new Array();
			for(j=0;j<4;i++){
				console.log('step2');
				console.log(x[1][1]);
					if(x[i][j]==0){
					x[i][j] = styles.white;
				} else if(x[i][j]==2){
					x[i][j] = styles.blue;
				} else if(x[i][j]==4){
					x[i][j] = styles.yellow;
				} else if(x[i][j]==8){
					x[i][j] = styles.green;
				}
			}
		}
		return {
			clickCount: 0,
			style: x,
			styleTrack: a
		}
	},
	getStyle(x){
		if(x==0){
			return styles.white;
		} else if(x==2){
			return styles.blue;
		} else if(x==4){
			return styles.yellow;
		} else if(x==8){
			return styles.green;
		} else{
			return styles.red;
		}
		},
	handleClick(x,y){
			tempStyle = this.state.style;
			tempTrack = this.state.styleTrack;
			if(Math.sign(x)==1){
				for (var i = 15; i >= 0; i--) {
					for (var j = 0 ; i < 4; i++) {
						if(tempTrack[i][j] != 0 && typeof tempTrack[i+x][j] !== 'undefined'){
							console.log(x+i);
							tempTrack[i+x][j] = tempTrack[i][j] + tempTrack[i+x][j];
							tempTrack[i][j] = 0;
							tempStyle[i][j] = this.getStyle(tempTrack[i][j]);
							tempStyle[i+x][j] = this.getStyle(tempTrack[i+x][j]);
						}
					}
				}
			} else {
				for (var i = 0; i <= 15; i++) {
					for (var j = 0 ; i < 4; i++) {
						if(tempTrack[i][j] != 0 && typeof tempTrack[i+x][j] !== 'undefined'){
							console.log(x+i);
							tempTrack[i+x][j] = tempTrack[i][j] + tempTrack[i+x][j];
							tempTrack[i][j] = 0;
							tempStyle[i][j] = this.getStyle(tempTrack[i][j]);
							tempStyle[i+x][j] = this.getStyle(tempTrack[i+x][j]);
						}
					}
				}
			}

			this.setState({
				style: tempStyle,
				styleTrack: tempTrack
			});
	},
	render() {
		console.log(this.state.styleTrack)
		return (
			<Board Click={this.handleClick} 
			clickCount={this.state.clickCount} 
			style={this.state.style}
			styleTrack={this.state.styleTrack}
			/>
		)

	}




});

module.exports = BoardContainer;