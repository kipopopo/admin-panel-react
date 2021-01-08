import React from 'react';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showSidebar: true
    }
    this.hideComponentSidebar = this.hideComponentSidebar.bind(this)
  }

  hideComponentSidebar() {
    this.setState({
        showSidebar: !this.state.showSidebar
    })
  }

  render() {
    let margin = {}
    if (this.state.showSidebar) {
      margin = {
        marginLeft: 250
      }      
    } else {
      margin = {
        marginLeft: 0
      }
    }
    const {showSidebar} = this.state
    return (
      <div className="wrapper">
      </div>
    );
  }
}

export default App;
