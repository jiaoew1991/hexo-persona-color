
var React = require('react');
var ReactPropTypes = React.PropTypes;
var SocialLink = require('./SocialLink.react');

var Header = React.createClass({
    propTypes: {
        config: ReactPropTypes.object.isRequired
    },
    render: function() {
        var config = this.props.config;
        return (
            <div>
                <div class="align-left">
                    <a href="{config.root}">
                        <img id="icon-photo-small" className="personal-photo animated rotateIn" src="{theme.photo}" alt="{config.author}" />
                    </a>
                    <h1 id="title-mini" class="">
                        <a href="{config.root}">{config.title}</a>
                    </h1>
                </div>
                <a target="_blank" id="mini-toggle" className="more icon align-right"></a>
                <nav id="main-nav" className="align-right animated slideInRight">
                    <SocialLink socialItems={config} />
                    <div className="clearfix"></div>
                </nav>
            </div>
        )
    }
});
module.exports = Header;
