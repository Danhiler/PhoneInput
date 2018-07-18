import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pureText: '',
            phoneOutput: '',
            phoneInput: ''
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <input type="text" placeholder="Start typing a phone number..." value={this.state.phoneInput}
                           onKeyDown={this.updateFields}/>
                    <br/>
                    <output> {this.state.phoneOutput} </output>
                </p>
            </div>
        );
    }

    updateFields = (e) => {
        let typedLetter = String.fromCharCode(e.which)
        if (e.which === 8) {//backspace
            typedLetter = -1
        }
        if(Number(typedLetter))
        this.setState((prevState) => {
            let {pureText, phoneOutput, phoneInput} = prevState
            if (typedLetter === -1) {//handle backspace
                pureText = pureText.slice(0,-1)
            } else {
                pureText += typedLetter
            }

            if (pureText.length > 10) {
                phoneInput = pureText;
            } else if (pureText.length > 6) {
                phoneInput = "(" + pureText.slice(0, 3) + ")" + pureText.slice(3, 6) + '-' + pureText.slice(6);
            } else if (pureText.length > 0) {
                phoneInput = "(" + pureText.slice(0, 3) + ")" + pureText.slice(3);
            }else {
                phoneInput=pureText
            }

            phoneOutput = "1+" + pureText;
            return {pureText, phoneOutput, phoneInput}
        })


    }
}

export default App;
