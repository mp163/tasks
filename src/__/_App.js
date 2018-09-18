import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import EnterLogin from './containers/EnterLogin';



class App extends React.Component{
render(){
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={EnterLogin} />
            {/*<Route path="/list" render={(props)=><TasksList users={store.getState()} {...props}/>} />*/}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  
  );
}
}
  export default App;
