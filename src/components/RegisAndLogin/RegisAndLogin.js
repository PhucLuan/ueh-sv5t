import './style.css'
import log from './Img/log.svg';
import RegisImg from "./Img/đăng ký-01.png";
import LoginImg from "./Img/đăng nhập-01.png";
import register from './Img/register.svg';
import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { sinhVienLogin } from "../../redux/actions/index";
import { connect } from 'react-redux';
import jwt_decode from "jwt-decode";

const RegisAndLogin = (props) => {

    const [FullName, setFullName] = useState("");
    const [Mssv, setMssv] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmpassword] = useState("");
    const [LoginObject, setLoginOject] = useState({ IsSuccessed: "", Message: "", ResultObj: "" });
    const [IsValid, setIsValid] = useState(true);

    function handleSubmitLogin(event) {
        event.preventDefault();
        PostLoginandGetToken();
    }

    function handleSubmitRegister(event) {
        event.preventDefault();
        PostRegister();
    }

    function PostLoginandGetToken() {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", ".AspNetCore.Identity.Application=CfDJ8H6WXzF55y1NtxBU_nMtEQuQCUlyQ2wYIWKD2TAA3bxBkGWkxhg1bEEWcFSFeGE-qDvMVFRAkkK7_pFM3PpuX5t_1WAtR5BFhu08wu1NmtMAzqk-ccoW6UtUYfmyq596BGCyvRjfRCWfu3fmV4vkEODc9x4YrptzByWuAC7l-IcuPLb3_RK046z1uqt8fU0SviVpDxbLU1w3WV8MUted95Dj_ESHDHfB6Ct4sHcyrsFbGCf6XpZIgTguyuN370nmDlQ-VVLRYapVZi7H-9aQvfdee2xV4gXBL_6SorcKnv2sy0NenpR0abBVz_0OEnkaPugfuoa5mxxmWkScDRX8s3bDuVqHdbIlp5FJpb3x2aD23hzsqCkXLyoCzNh2uU-R7fObn3D-g_IN9Qhv1UnJxcMKcjM5QxYq8RQRAGA9QsMOxkwqMlkqJPm03RzDFcJ4Zj21jv1oLy5Hnb8lbHYFv_1o-10BZ8E0HtePCbf1ktZqNfL8Iw3kuWRAI5xrKP0TwfogWoWYaRdBWgJN4rningA10YNCjxOLVImuQFH7DkSwic9PcdE2bo8K65cAm6K0D1eMqynjo8zj2_1AzKJaBMs1kx9R0C3ls4rOpZcX0SypCjQcjDYWd17e2Z8V2FmGEA");

        var formdata = new FormData();
        formdata.append("UserName", email);
        formdata.append("Password", password);
        formdata.append("RememberMe", "true");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://www.apisv5t.somee.com/api/Users/authenticate", requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(x => setLoginOject({ IsSuccessed: x.IsSuccessed, Message: x.Message, ResultObj: x.ResultObj }))
            .catch(error => console.log('error', error));
    }

    function PostRegister() {
        alert("Chức năng tạm thời đóng, vui lòng sử dụng tài khoản Demo được cung cấp");
        // var myHeaders = new Headers();
        // myHeaders.append("Cookie", ".AspNetCore.Identity.Application=CfDJ8H6WXzF55y1NtxBU_nMtEQtpwcT1Fkj6Cu5oCuq_5UszliQ1si0pXIOw6MJfK_rY4ms_iAeK8aFqcY0P2oA2kEbtgzhsrd7wPEn-1oZJ9Qx9n_igd1KGKdMWPfukN_3b1VvOohYBO_cmeCgURaXyHljyYWvdrKjxmTEX2VbRpFPy3f8Wfp7xl8IPg2LK7oCuw3RnRxw2o7KwtFFloGLwW0NgivFN_2d7dqkRZhv5uvbxL3fM6FSD6bShr4kUT9siqIWm-tWPN-rU0UwjOJ3qF1jMIrkNKdbx9IlGAETP3uY7e2kyyTE5G4D_JnUe8QraJhRNbk_Cn3lavL10RRffjZkyvsxIvcy307r2Ylcd54u7oWEinCZVsU3Ki0VHwX8JZmQ3ThIFLZQn49Lylmz6UadRjEGPSUdOB7bqdHB6Vpgy41-rCctVUcMSzNuQyb7but9LQ3-tT5z2G0ZbT5MZ-yRFKSGBLp4zDMWbQIb2TWT2IAsBH0KHvEnXPlpi-yPBthr0H1a9RWVnWXxgmn2yJLBy5bNJv5TSvMA_0uFBCXTbWWAkEmIX04tyMQ_PV_TcUoxo1Keray_196PIHiHOC1YXHxSy3XL8MRlm1gYHvIOUqB7jROBSe3-KIvWyyYFIOg");

        // var formdata = new FormData();
        // formdata.append("FullName", FullName);
        // formdata.append("Mssv", Mssv);
        // formdata.append("UserName", email);
        // formdata.append("Password", password);
        // formdata.append("ConfirmPassword", Confirmpassword);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: formdata,
        //     redirect: 'follow'
        // };

        // fetch("https://localhost:44391/api/Users", requestOptions)
        //     .then(response => response.text())
        //     .then(result => JSON.parse(result))
        //     .then(x => setLoginOject({ IsSuccessed: x.IsSuccessed, Message: x.Message, ResultObj: x.ResultObj }))
        //     .catch(error => console.log('error', error));
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
//Đăng nhập thành công
    
    if (LoginObject.IsSuccessed === true) {
        switch (LoginObject.Message) {
            case "Đăng nhập thành công":
                const sinhVien = {
                    userName: jwt_decode(LoginObject.ResultObj)['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
                    mssv: jwt_decode(LoginObject.ResultObj)['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'],
                    token: LoginObject.ResultObj
                }
                props.sinhVienLogin(sinhVien)
                return (<Redirect to="/Homepage" />);
                //break;
            case "Đăng ký thành công, vui lòng xác nhận email để kích hoạt tài khoản":
                alert(LoginObject.Message);
                break;
            default:
                break;
        }
        
    }
    else 
    if (LoginObject.IsSuccessed === false && IsValid === true) {
        setIsValid(false);
    }
    return (
        <div className="RegisAndLogincpn">
            <div className="Mycontainer">
                <div className="forms-Mycontainer">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSubmitLogin}>
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
                            <div className={IsValid ? "verification" : "verification active"}>*UserName or PassWord is invalid</div>
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
                        <form action="#" className="sign-up-form" onSubmit={handleSubmitRegister}>
                            <h2 className="title">Đăng Ký</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Họ tên" 
                                onChange={(e) => setFullName(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-key"></i>
                                <input type="text" placeholder="Mssv" 
                                onChange={(e) => setMssv(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email ueh @st.ueh.edu.vn" 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Mật khẩu" 
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Xác nhận mật khẩu" 
                                onChange={(e) => setConfirmpassword(e.target.value)}/>
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
                            {/* <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p> */}
                            <button className="Mybtn transparent" id="sign-up-Mybtn">
                                Đăng ký
            </button>
                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Đã có tài khoản ?</h3>
                            {/* <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p> */}
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
const mapStateToProps = state => {
    return {
        sinhVien: state.Loggin.sinhVien
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        sinhVienLogin: (sinhVien) => {
            dispatch(sinhVienLogin(sinhVien));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisAndLogin);