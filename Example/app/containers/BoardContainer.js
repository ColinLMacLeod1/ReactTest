var React = require('react');
var Board = require('../components/Board');
var styles = require('../styles')


var BoardContainer = React.createClass({
	getInitialState() {
		var x = [[0,0,0,0],
				 [0,2,0,0],
				 [0,0,2,0],
				 [0,0,0,0]];
		var a = [[0,0,0,0],
		 		 [0,2,0,0],
		 		 [0,0,2,0],
		 		 [0,0,0,0]];
		for(i=0;i<4;i++){
			for(j=0;j<4;j++){
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
		console.log('a at begining' + a)
		return {
			clickCount: 0,
			style: x,
			styleTrack: a
		}
	},
	getStyle(y){
		var temp = y;
		for(i=0;i<4;i++){
			for(j=0;j<4;j++){
				if(temp[i][j]==0){
					temp[i][j] = styles.white;
				} else if(temp[i][j]==2){
					temp[i][j] = styles.blue;
				} else if(temp[i][j]==4){
					temp[i][j] = styles.yellow;
				} else if(temp[i][j]==8){
					temp[i][j] = styles.green;
				}
			}
		}
		return temp;
	},
	getTrack() {
		return this.state.styleTrack;
	},
	handleClick(y){
			console.log('styleTrack at click'+this.state.styleTrack)
			var tempTrack = this.getTrack();
			var count = 0;
			if(y==4){
				for(j=0;j<4;j++){
					for(i=1;i<4;i){
						if(tempTrack[i][j]==0){
							tempTrack[i-1][j]=tempTrack[i][j];
							tempTrack[i][j]=0;
						}
					}
				}
			} else if(y==-4){
				for(i=0;i<4;i++){
					for(j=0;j<4;j++){
						tempTrack[i][j] = 0;
					}
				}
			}
			var tempStyle = this.getStyle(tempTrack);
			this.setState({
				style: tempStyle,
				styleTrack: tempTrack
			});
	},
	render() {
		console.log('styleTrack on render:'+this.state.styleTrack)
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