import React from 'react';
import './App.css';
import './styles/style.css';

import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

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
        <Header 
          showSidebar={showSidebar} 
          handleToggleSidebar={this.hideComponentSidebar}
          expandNavbar={margin}
        />
        {showSidebar && <Sidebar />}
        <Content 
          expandContent={margin} 
        />
        <Footer 
          expandFooter={margin}
        />
      </div>
    );
  }
}

export default App;
