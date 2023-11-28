import React from 'react';

class Clock extends React.Component {
    //state = {date: new Date()}; can also be used instead of constructor because it is a class based component and it is a new feature of javascript and it is a new feature of react
    constructor(props) {
        super(props);
        //super(props) brings react.component's constructor and it is a must to use super(props) in a class based component else it will show error 
        this.state = {date: new Date()};
    }

    tick() {
        this.setState((state, props) => ({
            date: new Date()
            //here state can be used to update the state of this class and props can be used to update the props of this class
            //this.state.date = new Date() is not allowed in react because it won't re-render the component and it will not show the updated time
            //setUpdates are asynchronous and may batch multiple setState() calls into a single update for performance
        }));
    }

    componentDidMount() {
        //componentDidMount is a life cycle hook of react and it is a method of react.component class and it is called when the component is rendered in the DOM
        this.clockTimer= setInterval(() => {
            this.tick();
        }, 1000);
        //this.clockTimer is a variable and it is a property of this class and it is a timer and it is a setInterval method of javascript and it takes two parameters one is a function and another is a time in milliseconds and it will call the function after the time is over and it will call the function again and again after the time is over and it will keep calling the function again and again after the time is over and it will keep calling
    }

    componentWillUnmount() {
        //componentWillUnmount is a life cycle hook of react and it is a method of react.component class and it is called when the component is removed from the DOM
        //Usecase: when we want to stop the timer when the component is removed from the DOM because it won't stop automatically and it will keep running in the background and it will consume memory and it will slow down the application
        clearInterval(this.clockTimer);
    }

    render() {
        return (
            <h1 className="heading">
                <span className='text'>Hello -{this.props.children}! Time is{" "}
                {this.state.date.toLocaleTimeString
                (this.props.language)}
                </span>
            </h1>
            //this.state.date came from constructor which is a state of this class and it is a object of Date class and toLocaleTimeString is a method of Date class and it takes a parameter which is a language and this language came from App.js file
        );
    }
}

// function Clock (props) {
//     return (
//         <h1 className="heading">
//             <span className='text'>Hello -{props.children}! Time is {new Date().toLocaleTimeString(props.language)}</span>
//         </h1>
//     );
// }
export default Clock;