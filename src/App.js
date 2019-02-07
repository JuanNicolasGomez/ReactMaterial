import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from './TodoApp';

localStorage.setItem("isLoggedIn", false);

localStorage.setItem("email", "juan@gmail.com");

localStorage.setItem("password", "123");


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {isLoggedIn : JSON.parse(localStorage.getItem("isLoggedIn")), email:"", password:""};
        console.log(this.state);

    }

    render() {


        const TodoView = () => (
              <div>
                  <ul>
                      <li><Link to="/">Log out</Link></li>
                  </ul>

                  <div>
                      <Route exact path="/" component= {TodoApp}/>
                  </div>
              </div>

            );

        const loginComp = () => (
            <Login handleLogin={this.handleSubmit}
           handleEmailChange={this.handleEmailChange}
           handlePasswordChange={this.handlePasswordChange} />
        )
        const LoginView = () => (
              <div>
                <ul>
                    <li><Link to="/">Todo</Link></li>
                </ul>

                <div>
                    <Route exact path="/" component= {loginComp}/>
                </div>
              </div>

            );

        if(this.state.isLoggedIn){
            var ActualView = TodoView;
        }else{
            var ActualView = LoginView;
        }

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <br/>
                    <br/>
                    <ActualView/>
                </div>
            </Router>
        );
    }

    handleSubmit = event => {
            if (this.state.email === localStorage.getItem("email") &&
                this.state.password === localStorage.getItem("password")) {
                localStorage.setItem("isLoggedIn", true);
                this.setState({ isLoggedIn: true });
                console.log("dsaasdfadfsd");
            }

        }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }


}

export default App;
