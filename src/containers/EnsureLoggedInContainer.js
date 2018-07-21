import React from 'react';
import { Redirect } from 'react-router';
// import { createBrowserHistory } from 'history/createBrowserHistory';

class EnsureLoggedInContainer extends React.Component {
    constructor(props) {

        super(props);
        console.log("ensure start");
        this.state = { isAuthenticated : false };
    }

    isAuthenticate = () => {
        
        setTimeout(()=> {this.setState(this.isAuthenticated=true)}, 1000) // fake async;
    }
   
    render() {
      const { isAuthenticated } =  {...this.state};
      console.log("ensure, ", this.isAuthenticate);
      if (isAuthenticated) {
        return this.props.children;
      } else {
        return <Redirect to='login'/>;
      }
    }

    
  }
  
  export default EnsureLoggedInContainer;