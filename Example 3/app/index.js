var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={'http://fileinfo.com/images/icons/files/128/' + this.props.picture} />
		)
	}
})
var Link = React.createClass({
	changeURL: function() {
		window.location.replace(this.props.href)
	},
	render: function() {
		return (
			<span style={{color: 'red', cursor: 'pointer'}} onClick={this.changeURL} >
				{this.props.children}
			</span>
		)
	}
})
var ProfileLink = React.createClass({
	render: function() {
		return (
			<Link href={'https://github.com/' + this.props.username}>
				Profile for {this.props.username}
			</Link>
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

ReactDOM.render(<Avatar picture="thm-753.png" username="ColinLMacLeod1" />, document.getElementById('app'))
//fb-profile.gif