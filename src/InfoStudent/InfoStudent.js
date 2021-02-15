import Ellipse from '../InfoStudent/Img/Ellipse 7.png';
import error from '../InfoStudent/Img/error.png';
import '../InfoStudent/InfoStudent.css';
import CircularProgressWithLabel from '../CircularProgress/CircularProgressWithLabel';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import GroupTimeLine from './GroupTimeLine/GroupTimeLine';
import InforStuDefault from './InforStuDefault/InforStuDefault';
import axios from 'axios';

const InfoStudent = (props) => {

    const [Criterias, setCriterias] = useState([]);

    useEffect(() => {
        
        axios.get('https://601ce4671a9c220017060f4b.mockapi.io/ImpleProgress')
            .then(res => {
                setCriterias([...res.data]);
            })
            .catch(error => console.log(error));
    }, [])

    const RenCriterias = Criterias.map( (Criteria,index) => {
        return(
            <NavLink to={`${props.match.url}/${Criteria.Lable}`} key = {index}>
                <CircularProgressWithLabel 
                    Name = {Criteria.Name} 
                    value={Criteria.Percent} />
            </NavLink>
        );
    } );
    // console.log(props.match);
    return (
        <Router className="container InfoStudent">
            <div className="PROFITE_SV5TOT">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 Profile">
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="img_Profile">
                                    <img src={Ellipse} className="img-responsive" alt="Image8" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                                <div className="Title_Profile">
                                    <h1>Họ tên SV</h1>
                                    <p>Thêm châm ngôn sống</p>
                                    <button type="button" className="btn btn-outline-danger">Thông Tin Cá Nhân</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3    ">
                            <div className="Title_Edit">
                                <ul className="Title_Edit_inline">
                                    <li><img src={error} alt="" /></li>
                                    <li><p>Cập nhật thông tin cá nhân</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-mobile">
                        {/* <NavLink to="/InfoStudent/1"><CircularProgressWithLabel Name = "Hoc tap tot" value="90" /></NavLink>
                        <CircularProgressWithLabel value="90" />
                        <CircularProgressWithLabel value="90" />
                        <CircularProgressWithLabel value="90" />
                        <CircularProgressWithLabel value="90" /> */}
                        {RenCriterias}
                    </div>
                </div>
            </div>

            <Route exact path="/InfoStudent" component={InforStuDefault} />
            <Route exact path="/InfoStudent/:Lable" component={GroupTimeLine} />

            {/* <!-- ------------------------------------------------------------------------------------------------------> */}
            
        </Router>
    );
}
export default InfoStudent;