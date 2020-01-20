import React, {Component} from 'react'
import '../styles/Login.css'
import {Link, Redirect} from 'react-router-dom'
import CryptoJS from 'crypto-js';   

class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            isLogged: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.username == 'admin' && this.state.password=='marco.ordonez'){
            //alert("Ohh YEAH!!!");
            this.setState({username: '', password: '', isLogged: true});
            
            var pass = this.state.password;
            var hash= CryptoJS.SHA1(pass);  
            console.log(hash.toString());          
            var encodestring = btoa(hash.toString());
            console.log(encodestring);
        }else{
            alert("Username o Password invalid.");
            this.setState({username: '', password: '', isLogged: false});
        }

    }

    render(){
        return(
            <div className="Login">
                {
                    this.state.isLogged ?
                    
                    <Redirect to="/home"/>
                    :
                    <div className="Login-box">
                        <form onSubmit={this.onSubmit}>
                            <div className="Login-box-databox">
                                <label className="Login-box-username">Username</label>
                                <input 
                                    className="Login-username-input"                            
                                    type="text"
                                    value={this.state.username}
                                    onChange={ (e)=>{ this.setState({username: e.target.value}) }}
                                />
                            </div>

                            <div className="Login-box-databox">
                                <label className="Login-box-password">Password</label>
                                <input 
                                    className="Login-password-input"
                                    type="password"
                                    value={this.state.password}
                                    onChange={ (e)=>{ this.setState({password: e.target.value}) }}
                                />
                            </div>
                            <button type="submit" className="Login-submit">Iniciar Sesion</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Login;