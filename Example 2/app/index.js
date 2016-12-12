var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={'https://thetab.com/blogs.dir/48/files/2014/02/' + this.props.picture} />
		)
	}
})
var ProfileLink = React.createClass({
	render: function() {
		return (
			<a href={'https://github.com/' + this.props.username}> Profile for {this.props.username} </a>
		)
	}
})
var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic picture={this.props.picture}/>
				<ProfileLink username={this.props.username} />
			</div>
		)
	}
})

ReactDOM.render(<Avatar picture="fb-profile.gif" username="ColinLMacLeod1" />, document.getElementById('app'))
//fb-profile.gif