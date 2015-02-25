import React from 'react';

var Comp = React.createClass({

    label: 'Date',

    getInitialState: function () {
        return {d: this.getUpdatedDate()};
    },

    getUpdatedDate: function () {
        return new Date().toString();
    },

    handleClick: function () {
        this.setState({d : this.getUpdatedDate()});
        this.render();
    },

    render: function () {
        var someVar= 'World';
        return (
            <div>
                <h1>{this.label}: {this.state.d}</h1>
                <a className="btn" href="#" onClick={this.handleClick}>Update date</a>
            </div>
        )
    }
});

export default Comp;
