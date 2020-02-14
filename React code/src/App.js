import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect  } from 'react-router-dom';
import Header from './Header'
import Test from './Test';
import SubmitResults from './components/SubmitResults';
import Notfound from './components/Notfound';
import Home from './components/Home';
import PendingRegistrations from './components/table/PendingRegistrations';
import ViewRegistration from './components/ViewRegistration';
import WarrantyForm from './components/WarrantyForm';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./styles/Styles.scss";

const App = () => {
  
 return (
   <div>
    <Header /> 
      <main class="container">
      
      <Router exact basename={'/home'}>
      <Switch>
      {/* <Route exact path="/home" render={() => (
       <Redirect to="/"/>
      )}/> */}
      <Route exact path='/' component={Home}/>
      <Route exact path='/registration' component={WarrantyForm}/>
      <Route exact path='/app' component={Test}/>
      <Route exact path='/success' component={SubmitResults}/>
      <Route exact path='/pendingRegistration' component={PendingRegistrations}/>
      <Route exact path='/viewRegistration' component={ViewRegistration}/>    
      <Route component={Notfound}/>
      </Switch>
      </Router>
         
      </main>
  </div>
 );
}
  
export default App