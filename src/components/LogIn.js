import React, { Component } from 'react';


export default class LogIn extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    console.log(this.state)
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  logIn = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })
    })
    .then(res => res.json())
    .then(userInfo => {
      console.log(userInfo)
      localStorage.token = userInfo.token
    })
}

  handleSignUp = () => {
    // console.log(this.props)
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={(e) => this.logIn(e)}>
            <h1>Log In</h1>
            <p>Username:</p>
            <input type="text" name="username" placeholder="Username" className="input-text" onChange={(e) => this.handleChange(e)} />
            <p>Password:</p>
            <input type="password" name="password" placeholder="Password" className="input-text" onChange={(e) => this.handleChange(e)} />
            <br />
            <input type="submit" name="submit" value="Log In" className="submit" />
          </form>
          <br />
          <br />
          <br />
          <p>New user? click <button onClick={this.handleSignUp}>here</button> to sign up!</p>
        </center>
      </div>

    );
  }

}