import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/navigation.css'
import Approver from './components/approver';
import Major from './components/major';
import TransferCourse from './components/transfer_course';
import Home from './components/home';
import Navigation from './components/navigation';
import Error from './components/error';
import School from './components/school';
 
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
             <Route path="/transfer-course" component={TransferCourse}/>
             <Route path="/school" component={School}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;