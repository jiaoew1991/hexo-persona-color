/**
 * Created by jiaoew on 15/2/12.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var SocialLink = require('./SocialLink.react');

var Sidebar = React.createClass({

    propTypes: {
        author: ReactPropTypes.string.isRequired,
        title: ReactPropTypes.string.isRequired,
        photo: ReactPropTypes.string.isRequired,
        subtitle: ReactPropTypes.string.isRequired,
        socialItems: ReactPropTypes.object.isRequired
    },

    render: function() {
        var photo = this.props.photo;
        var author = this.props.author;
        var title = this.props.title;
        var subtitle = this.props.subtitle;
        var dateInfo = new Date().getFullYear;
        var copyright = '';
        if (author) {
            copyright = author + '&copy; - ' + dateInfo;
        } else {
            copyright = title + '&copy; - ' + dateInfo;
        }
        return (
            <div>
                <div className="personal-info">
                    <figure>{photo}
                        <div className="backtohome">
                            <a href="/">
                                <img id="icon-photo-normal" className="personal-photo animated rotateIn" src={photo} alt={author} />
                            </a>
                        </div>
                        <figcaption>
                            <h3>{author}</h3>
                            <p>{subtitle}</p>
                        </figcaption>
                        <SocialLink socialItems={this.props.socialItems} isDepth="true"/>
                    </figure>
                </div>
                <div className="theme-info">
                    <a target="_blank" href="https://github.com/heruoxin/hexo-persona-color" className="html5"> Persona Color Theme</a>{copyright}
                </div>
            </div>
        )
    }
});

module.exports = Sidebar;
