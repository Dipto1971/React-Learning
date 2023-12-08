import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, language: currentLocale } = this.props;
        const { change: nextChange, language: nextLocale } = nextProps;

        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }

        return true;
    }

    render() {
        const { change, language, show } = this.props;

        return (
            <>
                <button type="button" onClick={() => change(language)}>
                    {language === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                {show && <p>Button pressed and changed to English </p>}
            </>
        );
    }
}

export default Button;
