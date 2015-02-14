
var React = require('react');
var Sidebar = require('./Sidebar.react.js');

var MainSection = React.createClass({

    render: function() {
        return (
            <div>
                <aside id="sidebar" className="align-left animated slideInLeft">
                    <Sidebar />
                </aside>
                <div id="content" className="inner">
                    <p id="header-fix"></p>
                    <div id="main-col" className="align-right">
                        <div id="wrapper"> </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );

    }
});

module.exports = MainSection;
