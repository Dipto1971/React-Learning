import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className='text'>Hello - {this.props.children}! Time is {new Date().toLocaleTimeString(this.props.Language)}</span>
            </h1>
        );
    }
}

export default Clock;