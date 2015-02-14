
var React = require('react');
var Header = require('./Header.react.js');
var Footer = require('./Footer.react.js');
var MainSection = require('./MainSection.react.js');



var BlogApp = React.createClass({

    render: function() {
        return (
            <div>
                <Header config={config}/>
                <MainSection />
                <Footer />
            </div>
        );
    }
});

module.exports = BlogApp;
