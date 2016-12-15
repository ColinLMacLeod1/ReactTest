const React = require('react');
const {render} = require('react-dom');
const Avatar = require('./Avatar');

render(
	<Avatar picture="fb-profile.gif" username="ColinLMacLeod1" />,
	document.getElementById('app')
);
