import React from 'react'

class App extends React.Component {
    state = {
        language: "English"
    }

    onLanguageChange = language => {
        this.setState({ language: language })
    }

    render(props) {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('English')}></i>
                    <i className="flag nl" onClick={() => this.onLanguageChange('Dutch')}></i>
                </div>
                {this.state.language}
            </div>
        )
    }
}

export default App