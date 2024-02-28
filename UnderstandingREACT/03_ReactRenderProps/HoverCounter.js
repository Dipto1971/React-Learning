import React from "react";

export default class ClickCounter extends React.Component{
    
    render() {
        const { counter} = this.props;
        const { incrementCount } = this.props;
        return (
            <div>
                <h1 type="button" onMouseOver={incrementCount}>
                    Hovered {counter} times
                </h1>
            </div>
        )
    }
}
