const React = require('react');
const ProfilePic = require('./ProfilePic');
const ProfileLink = require('./ProfileLink');

const Avatar = React.createClass({
	render() {
		return (
			<div>
				<ProfilePic picture={this.props.picture}/>
				<ProfileLink username={this.props.username} />
			</div>
		)
	}
});

module.exports = Avatar;