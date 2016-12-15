const React = require('react');

const ProfilePic = React.createClass({
	render() {
		return (
			<img src={'https://thetab.com/blogs.dir/48/files/2014/02/' + this.props.picture} />
		)
	}
});

module.exports = ProfilePic;