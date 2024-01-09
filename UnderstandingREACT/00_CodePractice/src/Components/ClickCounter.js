import React from "react";

export default class ClickCounter extends React.Component{
    
    render() {
        const { counter, incrementCount } = this.props;
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    Clicked {counter} times
                </button>
            </div>
        )
    }
}
