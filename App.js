import React from 'react';

import Splash from '@screens/Splash';
import Main from '@screens/main';

export default class App extends React.Component {
  state = {
    isLoading: true
  }
  componentDidMount= async() => {  
    setTimeout(() => {this.setState({isLoading: false})},1000);
  }

  render() {
    if (this.state.isLoading) {
      return <Splash />
    } else {
      return <Main />
    }
  }
}