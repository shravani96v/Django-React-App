import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/navigation.css'
import Approver from './components/approver';
import Major from './components/major';
import Home from './components/home';
import Navigation from './components/navigation';
import Error from './components/error';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/approver" component={Approver}/>
             <Route path="/major" component={Major}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;