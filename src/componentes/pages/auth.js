import React, {Component} from "react";
import Login from "../auth/login";
import loginImg from "../../style/images/login.jpg";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccesfulSuth = this.handleSuccesfulAuth.bind(this);
        this.handleUnSuccesfulSuth = this.handleUnSuccesfulAuth.bind(this);
    }

    handleSuccesfulAuth() {
        this.props.handleSuccesfulLogin();
        this.props.history.push("/");
    }

    handleSuccesfulAuth() {
       this.props.handleUnSuccesfulLogin();
    }
    render() {
        return (
            <div className="auth-page-wrapper">
            <div 
            className="left-column"
            style={{
                backgroundImage: `url(${loginImg})`

            }}
            />

            <div className="right-column">
                <Login 
                handleSuccesfulAuth={this.handleSuccesfulAuth}
                handleUnSuccesfulAuth={this.handleUnSuccesfulSuth}
                />
            </div>
            </div>
        );
    }
}
