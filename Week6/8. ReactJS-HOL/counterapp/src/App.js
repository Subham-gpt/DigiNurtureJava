import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };

    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  updateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px'
    };

    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '100px',
      fontSize: '18px',
      gap: '150px' 
    };

    const sectionStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    };

    return (
      <div style={containerStyle}>

        <div style={sectionStyle}>
          <button style={buttonStyle} onClick={this.updateEntry}>Login</button>
          <span>{this.state.entrycount} people Entered!!!</span>
        </div>

        <div style={sectionStyle}>
          <button style={buttonStyle} onClick={this.updateExit}>Exit</button>
          <span>{this.state.exitcount} people Left!!!</span>
        </div>
      </div>
    );
  }
}

export default App;
