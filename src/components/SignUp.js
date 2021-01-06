import React, { Component } from 'react';


export default class SignUp extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        console.log(this.state)
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                user: { username: this.state.username, password: this.state.password}
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            if(userInfo.error){
                alert(userInfo.error)
              }
              else{
                console.log(userInfo)
                localStorage.token = userInfo.token
                this.props.history.push('/myteam')
              }
            }
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.signUp(e)}>
                    <center>
                        <h1>Sign Up:</h1>
                        <input type="text" name="username" placeholder="Create a username" className="input-text" onChange={(e) => this.handleChange(e)}/>
                        <br />
                        <input type="password" name="password" placeholder="Create a password" onChange={(e) => this.handleChange(e)}/>
                        <br />
                        <input type="submit" name="submit" value="Create my account" />
                    </center>
                </form>
            </div>
            
        );
    }
}