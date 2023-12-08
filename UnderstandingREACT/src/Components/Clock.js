import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), language: 'bn-BD' };

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            language: locale
        });
        console.log('Button Clicked');
    }

    render() {
        console.log('Clock component rendered');
        const { date, language } = this.state;
        const { serial } = this.props;
        return (
            <div>
                <h1 className="heading">
                    <span className='text'>
                        Clock Number = {serial}: {date.toLocaleTimeString(language)}
                    </span>
                </h1>
                {language === 'bn-BD' ? (
                    <Button change={this.handleClick} language="en-US" show={false} />
                ) : (
                    <Button change={this.handleClick} language="bn-BD" show />
                )}
            </div>
        );
    }
}

export default Clock;
