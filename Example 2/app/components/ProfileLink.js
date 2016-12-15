const React = require('react');

const ProfileLink = React.createClass({
	render() {
		return (
			<a href={'https://github.com/' + this.props.username}> Profile for {this.props.username} </a>
		)
	}
});

module.exports = ProfileLink;