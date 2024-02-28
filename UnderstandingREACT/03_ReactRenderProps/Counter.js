import React from 'react';

class Counter extends React.Component {
    state = {
        counter: 0,
    };

    incrementCount = () => {
        this.setState((prevState) => (
            { counter: prevState.counter + 1 }
        ));
    }

    render(){
        const { render } = this.props;
        const { counter } = this.state;
        const { incrementCount } = this;
        return render (counter, incrementCount);
    }
}

export default Counter;