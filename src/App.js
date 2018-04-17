import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { Provider, Consumer } = React.createContext();

class App extends Component {
  state = {
    theme: {
      color: 'dark',
      font: 16,
    },
  };

  changeTheme = newColor => {
    this.setState({ theme: { color: newColor } });
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            changeTheme: this.changeTheme,
          },
        }}
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <Consumer>
              {({ state, actions }) => {
                console.log('actions: ', actions);
                console.log('state: ', state);
                return (
                  <div
                    style={{
                      backgroundColor: state.theme.color,
                      height: 400,
                    }}
                  >
                    <button onClick={() => actions.changeTheme('blue')}>
                      change color
                    </button>
                    <button onClick={() => actions.changeTheme('red')}>
                      change color
                    </button>
                    <button onClick={() => actions.changeTheme('green')}>
                      change color
                    </button>
                    Context API examples
                  </div>
                );
              }}
            </Consumer>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
