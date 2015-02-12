var React = require('react');
var ReactPropTypes = React.PropTypes;

var socialLinkFilter = function(name, iconName, link, isDepth) {
    if (name) {
        var cx = React.addons.classSet;
        var classes = cx({
            'icon': true,
            'depth': isDepth
        });
        classes += ' ' + iconName;
        var link = link+name;
        return <a className={classes} href={link} target="_blank"></a>;
    }
    return null;
};

var SocialLink = React.createClass({
    propTypes: {
        socialItems: ReactPropTypes.object.isRequired,
        isDepth: ReactPropTypes.bool
    },

    render: function() {
        var allItems = this.props.socialItems;
        var linkMap = {
            email: 'mailto:',
            twitter: 'http://twitter.com/',
            facebook: 'http://fb.com/',
            googleplus: 'http://plus.google.com/',
            github: 'http://plus.google.com/',
            printrest: 'http://www.pinterest.com/',
            linkedin: 'http://www.linkedin.com/',
            instagram: 'http://instagram.com/',
            zhihu: 'http://zhihu.com/people/',
            weibo: 'http://weibo.com/people/',
            renren: 'http://renren/profile/'
        };
        var socialKeys = Object.keys(linkMap);
        var links = [];
        for (var key in socialKeys) {
            var rst = socialLinkFilter(allItems[key], key, linkMap[key], this.props.isDepth);
            if (rst) {
                links.push(rst);
            }
        }
        return (
            <section class="social">
            {links}
            </section>
        )
    }
});

module.exports = SocialLink;
