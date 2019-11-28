import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class Head extends Component {
  render() {
    return <div className='App-header'>
      <div className='App-font'>Аптека+   </div>  
    <div>
      <button className='App-button-login'>Login</button>     
      </div>
      </div>
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTable: 0
    };
  }
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    const activeTable = this.state.activeTable;
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div >
        <div className="App-header">
        <div className='App-font'>Аптека+   </div>  
    <div>
      <button className='App-button-login'>Login</button>     
      </div>
        </div>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
