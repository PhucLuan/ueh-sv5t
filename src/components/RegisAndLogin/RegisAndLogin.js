import './style.css'
import log from './Img/log.svg';
import register from './Img/register.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisAndLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        GetToken();
    }

    function GetToken(){

        axios({
            method: 'post',
            url: 'http://localhost:54178/api/Users/authenticate',
            data: {
                "UserName": email,
                "Password": password,
                "RememberMe": true
              },
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                alert(response);
            })
            .catch(function (response) {
                //handle error
                alert(response);
            });
    }

    useEffect(() => {
        const sign_in_Mybtn = document.querySelector("#sign-in-Mybtn");
        const sign_up_Mybtn = document.querySelector("#sign-up-Mybtn");
        const Mycontainer = document.querySelector(".Mycontainer");

        sign_up_Mybtn.addEventListener("click", () => {
            Mycontainer.classList.add("sign-up-mode");
        });

        sign_in_Mybtn.addEventListener("click", () => {
            Mycontainer.classList.remove("sign-up-mode");
        });
    }, [])

    return (
        <div className="RegisAndLogincpn">
            <div className="Mycontainer">
                <div className="forms-Mycontainer">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Đăng Nhập</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username"
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" value="Đăng nhập" className="Mybtn solid" />
                            <p className="social-text">Hoặc đăng ký với</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Đăng Ký</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="Mybtn" value="Đăng ký" />
                            <p className="social-text">Hoặc đăng ký với</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-Mycontainer">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Chưa có tài khoản đăng nhập ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
            </p>
                            <button className="Mybtn transparent" id="sign-up-Mybtn">
                                Đăng ký
            </button>
                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Đã có tài khoản ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
            </p>
                            <button className="Mybtn transparent" id="sign-in-Mybtn">
                                Đăng nhập
            </button>
                        </div>
                        <img src={register} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegisAndLogin;