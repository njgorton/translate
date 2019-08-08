import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

// Commented out code is for the this.context property instead of the Consumer being used below:
class Button extends React.Component {
    // static contextType = LanguageContext
    renderSumbit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                {/* {text} */}
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSumbit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button