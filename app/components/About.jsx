var React = require('react');

/*
var About = React.createClass({
    render: function(){
        return(
            <h3>About Component</h3>
        );
    }
});
*/

// Above code same with below (if we use render method only)
/*
var About = function(props) {
    return(
        <h3>About Component</h3>
    );
};
*/

// And same with below
var About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p>Welcome to about page</p>
        </div>
    );
};

module.exports = About;