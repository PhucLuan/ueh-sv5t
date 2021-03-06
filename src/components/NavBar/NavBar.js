import './NavBar.css'
import Logoueh from '../NavBar/Logoueh.png';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CheckLogin from '../CheckLogin/CheckLogin';

const NavBar = () => {

    const [NavBar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    useEffect(() => {
        const menuBtn = document.querySelector(".menu-icon span");
        const searchBtn = document.querySelector(".search-icon");
        const cancelBtn = document.querySelector(".cancel-icon");
        const items = document.querySelector(".My-nav-items");
        const form = document.querySelector("form");
        menuBtn.onclick = () => {
            items.style.background = "#005495";
            items.classList.add("active");
            menuBtn.classList.add("hide");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        }
        cancelBtn.onclick = () => {
            items.style.background = "none";
            items.classList.remove("active");
            menuBtn.classList.remove("hide");
            searchBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            form.classList.remove("active");
            cancelBtn.style.color = "#ff3d00";
        }
        searchBtn.onclick = () => {
            form.classList.add("active");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        }
    }, [])

    const NavStyle = {
        height: '100px',
        borderBottom: '2px solid gray'
    };

    return (
        <div className="Demo">
            <nav className={NavBar ? 'NavBar active' : 'NavBar'} style={NavStyle}>
                <div className="menu-icon">
                    <span className="fas fa-bars IconToggle"></span></div>
                <Link to="/" className="logo">
                    <img src={Logoueh} alt="Logo" /></Link>
                <div className="My-nav-items">
                    <li><Link to="/News">TIN TỨC</Link></li>
                    <li><Link to="/ExamplaryStu">TẤM GƯƠNG SV5T</Link></li>
                    <li><Link to="#">CHƯƠNG TRÌNH</Link></li>
                    <li><Link to="/RegisAndLogin"><CheckLogin /></Link></li>
                </div>
                <div className="search-icon">
                    <span className="fas fa-search IconSearch"></span></div>
                <div className="cancel-icon">
                    <span className="fas fa-times"></span></div>
                <form action="#">
                    <input type="search" className="search-data" placeholder="Tìm kiếm" required />
                    <button type="submit" className="fas fa-search"></button>
                </form>
            </nav>
        </div>
    );
}

export default NavBar;