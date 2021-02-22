import './NavBarInfoStu.css'
import { Redirect } from "react-router-dom";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


const NavBarInfoStu = () => {

    const [NavBar, setNavbar] = useState(false);
    const [isActiveLinktoHome, setActiveLinktoHome] = useState();

    if (isActiveLinktoHome === true) {
        return (<Redirect to="/" />);
    }

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={NavBar ? "navbar navbar-expand-lg navbar-light bg-light NavBarInfoStu active" : "navbar navbar-expand-lg navbar-light bg-light NavBarInfoStu"}>
            <div className="container">
                <a className="navbar-brand" onClick={() => setActiveLinktoHome(true)}>Trang chủ</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/InfoStudentContainer" exact="/"
                            className="nav-link">Hồ sơ của tôi</NavLink>
                        <NavLink to="/InfoStudentContainer/ProfileSV"
                            className="nav-link">Thông tin cá nhân</NavLink>
                        <NavLink to="/InfoStudentContainer/DetailInfo"
                            className="nav-link">Hồ sơ Sinh viên 5 tốt</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default NavBarInfoStu;