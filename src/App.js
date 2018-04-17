import React, { PureComponent } from 'react';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

export const { Provider, Consumer } = React.createContext();

class App extends PureComponent {
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
            <Button color="blue" />
            <Button color="red" />
            <Button color="green" />
            <Consumer>
              {({ state }) => {
                return (
                  <div
                    style={{
                      backgroundColor: state.theme.color,
                      height: 400,
                      margin: 50,
                    }}
                  >
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
