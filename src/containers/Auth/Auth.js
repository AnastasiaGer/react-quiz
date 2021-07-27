import React from "react";
import classes from "./Auth.module.css";
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends React.Component {
  loginHandler =() => {

  }

  registerHandler =() => {
    
  }

  submitHandler(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
        <h1>Auth</h1>
        <form onSubmit={this.submitHandler} className={classes.AuthForm}>
          <Input 
          label='Email'/>

          <Input 
          label='Password' errorMessage='' />

          <Button type='success' onClick={this.loginHandler}>Log In</Button>
          <Button type='primary' onClick={this.registerHandler}>Sing In</Button>
        </form>
        </div>
      </div>
    );
  }
}
