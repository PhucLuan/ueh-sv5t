import '../NavBar/NavBar.css'
import hamburger from '../NavBar/hamburger.png';
import Logoueh from '../NavBar/Logoueh.png';
import search from '../NavBar/search.png';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const NavBar = () => {
    const NavStyle = {
        height: '100px',
        borderbottom: '2px solid gray'
    };

    useEffect(() => {
        const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    }, [])
    return (
        <nav className="NavBar" style={NavStyle}>
            <div className="menu-icon">
                <img src={hamburger} />
                <span className="fas fa-bars"></span></div>
            <div className="logo">
                <img src={Logoueh} /></div>
            <div className="nav-items">
                <li><a href="#">CHƯƠNG TRÌNH</a></li>
                <li><a href="#">TIN TỨC</a></li>
                <li><a href="#">TẤM GƯƠNG SV5T</a></li>
                <li><a href="#">ĐĂNG NHẬP | ĐĂNG KÝ</a></li>
            </div>
            <div className="search-icon">
                <img src={search} />
                <span className="fas fa-search"></span></div>
            <div className="cancel-icon">
                <span className="fas fa-times"></span></div>
            <form action="#">
                <input type="search" className="search-data" placeholder="Tìm kiếm" required />
                <button type="submit" className="fas fa-search"></button>
            </form>

            <Helmet>
                <script src="https://kit.fontawesome.com/a076d05399.js"></script>
            </Helmet>
        </nav>
    );
}
export default NavBar;